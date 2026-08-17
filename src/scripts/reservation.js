/*
 * Reservation form: validation, submitting state, and the two outcomes.
 *
 * The form validates itself rather than leaning on the browser's built-in
 * bubbles, which are unstyleable and speak whatever language the browser is
 * set to — so `novalidate` goes on here, from script, and not in the markup:
 * without JavaScript the form still posts straight to the endpoint and the
 * native checks are the only ones left. The `required` / `type` attributes
 * stay on the inputs either way, so the fields keep their semantics for
 * assistive technology.
 *
 * Every message comes from the page's own language file, handed over in a JSON
 * block, so this file holds no words at all.
 */

const form = document.querySelector('[data-reservation-form]');

if (form) {
  form.setAttribute('novalidate', '');

  const endpoint = form.dataset.endpoint || '';
  const status = form.querySelector('[data-form-status]');
  const submit = form.querySelector('[data-submit]');
  const done = document.querySelector('[data-form-done]');
  const t = JSON.parse(form.querySelector('[data-form-messages]').textContent);

  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const today = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  };

  /** Each rule returns an error message, or an empty string when the value passes. */
  const rules = {
    ime: (v) => (!v.trim() ? t.required.ime : v.trim().length < 2 ? t.invalid.ime : ''),
    email: (v) => (!v.trim() ? t.required.email : EMAIL.test(v.trim()) ? '' : t.invalid.email),
    telefon: (v) =>
      !v.trim() ? t.required.telefon : v.replace(/\D/g, '').length < 8 ? t.invalid.telefon : '',
    datum: (v) => {
      if (!v.trim()) return t.required.datum;
      const chosen = new Date(`${v}T00:00:00`);
      if (Number.isNaN(chosen.getTime())) return t.invalid.datumBad;
      return chosen < today() ? t.invalid.datumPast : '';
    },
    gostje: (v) => {
      if (!v.trim()) return t.required.gostje;
      const count = Number(v);
      if (!Number.isInteger(count) || count < 1) return t.invalid.gostje;
      return count > 60 ? t.invalid.gostjeMany : '';
    },
    obseg: (v) => (v ? '' : t.required.obseg),
  };

  const fieldValue = (name) => {
    const group = form.elements[name];
    if (group instanceof RadioNodeList) return group.value;
    return group?.value ?? '';
  };

  const inputsFor = (name) => {
    const group = form.elements[name];
    return group instanceof RadioNodeList ? Array.from(group) : group ? [group] : [];
  };

  const setError = (name, message) => {
    const slot = form.querySelector(`[data-error-for="${name}"]`);
    if (slot) slot.textContent = message;
    inputsFor(name).forEach((input) => {
      if (input.type === 'radio') return; // the message hangs off the fieldset
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
    });
  };

  const validateField = (name) => {
    const message = rules[name](fieldValue(name));
    setError(name, message);
    return message;
  };

  // Re-check a field once it has been left, so errors clear as they are fixed.
  Object.keys(rules).forEach((name) => {
    inputsFor(name).forEach((input) => {
      input.addEventListener('blur', () => validateField(name));
      input.addEventListener('change', () => validateField(name));
    });
  });

  /*
   * Slovenian counts in four — ednina, dvojina, then 3–4, then 5 and up — and
   * the noun, the verb and the participle all move together. Intl.PluralRules
   * knows that per locale, so the language file supplies one phrase per
   * category and this picks the right one.
   */
  const plural = new Intl.PluralRules(t.locale);
  const unfilled = (n) => {
    const form_ = t.unfilled[plural.select(n)] ?? t.unfilled.other;
    return form_.replace('{n}', String(n));
  };

  const setStatus = (message, state) => {
    if (!status) return;
    status.textContent = message;
    if (state) status.setAttribute('data-state', state);
    else status.removeAttribute('data-state');
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const failed = Object.keys(rules).filter((name) => validateField(name) !== '');

    if (failed.length > 0) {
      setStatus(unfilled(failed.length), 'error');
      form.querySelector(`[name="${failed[0]}"]`)?.focus();
      return;
    }

    if (!endpoint) {
      // Deployed without a form endpoint: say so plainly and give the visitor a
      // way through, rather than swallowing the reservation.
      setStatus(t.noEndpoint, 'error');
      return;
    }

    submit.disabled = true;
    const label = submit.textContent;
    submit.textContent = submit.dataset.sending || label;
    setStatus('', null);

    try {
      /*
       * Sent url-encoded rather than multipart: that is what Netlify Forms
       * expects from an AJAX submission, and Formspree and a plain function
       * handler both take it too. `URLSearchParams` keeps repeated names, so
       * ticking both extras still sends both.
       */
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      if (done) {
        form.hidden = true;
        done.hidden = false;
        done.focus();
      } else {
        form.reset();
        setStatus(t.ok, 'ok');
      }
    } catch {
      setStatus(t.failed, 'error');
      submit.disabled = false;
      submit.textContent = label;
    }
  });
}

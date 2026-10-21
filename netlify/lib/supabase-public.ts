/*
 * The Colnix database, as the public sees it. The anon key is public by design
 * (it ships in every Colnix browser bundle): it can call only the functions
 * explicitly granted to `anon` — club_join, club_card, club_unsubscribe,
 * club_public_settings — and every table behind them is closed by RLS.
 * Override both with env vars on Netlify if the project ever moves.
 */
export const SUPABASE_URL = process.env.SUPABASE_URL ?? 'https://aexfjfigimccvyohiyyn.supabase.co';
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleGZqZmlnaW1jY3Z5b2hpeXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NDkzMzgsImV4cCI6MjEwMjUyNTMzOH0.KOTpnLnAOhdySrFzkJjApHZMWb6TmqqZ6fici016-cI';

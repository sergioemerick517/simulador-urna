-- Simulador da Urna — Beta 6.0
-- Migração MANUAL para preparar a proteção contra registros duplicados.
-- Não foi aplicada automaticamente ao banco de produção.
-- Faça backup/revisão antes de executar no SQL Editor do Supabase.

begin;

alter table public.urna_votes
    add column if not exists vote_id text;

-- Mantém compatibilidade com os registros antigos que não tinham identificador.
update public.urna_votes
set vote_id = 'legacy-' || id::text
where vote_id is null;

alter table public.urna_votes
    alter column vote_id set not null;

do $$
begin
    if not exists (
        select 1
        from pg_constraint
        where conname = 'urna_votes_vote_id_key'
          and conrelid = 'public.urna_votes'::regclass
    ) then
        alter table public.urna_votes
            add constraint urna_votes_vote_id_key unique (vote_id);
    end if;
end
$$;

commit;

-- Verificação depois de executar:
-- select count(*) as total, count(distinct vote_id) as identificadores_unicos
-- from public.urna_votes;

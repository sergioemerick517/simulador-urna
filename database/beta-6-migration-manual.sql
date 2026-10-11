-- Simulador da Urna — Beta 6.0
-- Migração aditiva e compatível com a Beta 5.0 publicada.
-- A coluna tem DEFAULT para que a Beta 5.0, que não envia vote_id, continue inserindo registros.
-- Revise o SQL e faça backup antes de aplicá-lo em outro ambiente.

alter table public.urna_votes
    add column if not exists vote_id text;

alter table public.urna_votes
    alter column vote_id set default gen_random_uuid()::text;

-- Mantém identificadores para os registros antigos.
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

-- Solicita ao PostgREST recarregar o cache do esquema.
notify pgrst, 'reload schema';

-- Verificação depois de executar:
-- select count(*) as total, count(distinct vote_id) as identificadores_unicos
-- from public.urna_votes;

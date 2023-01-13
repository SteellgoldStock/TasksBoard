<script lang="ts">
    import { Input } from "$lib/components/form/inputs/simple";
    
    let email: string;
    let password: string;
</script>

<div class="flex flex-col items-center md:h-screen lg:py-0">
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Créer votre compte</h1>
            <form class="space-y-4 md:space-y-6" action="#">
                <div><Input type="email" bind:value={email} placeholder="johndoe@example.com" label="Adresse courriel" /></div>
                <div><Input type="password" bind:value={password} placeholder="••••••••" label="Choisissez un mot de passe" /></div>
                <div><Input type="password" bind:value={password} placeholder="••••••••" label="Confirmer votre mot de passe" /></div>
                <button type="button" class="px-3 py-2 w-full text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none">S'inscrire</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Déjà un compte ? <a href="/signin" class="hover:text-default transition-all ease-in-out 2s">Se connecter</a>
                </p>
            </form>
        </div>
    </div>
</div>
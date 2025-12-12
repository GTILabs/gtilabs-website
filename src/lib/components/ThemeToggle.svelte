<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';
	import { scale } from 'svelte/transition';

	$: currentTheme = $theme;
</script>

<button
	onclick={() => theme.toggle()}
	class="relative w-10 h-10 rounded-xl flex items-center justify-center dark:bg-dark-800 bg-light-200 dark:hover:bg-dark-700 hover:bg-light-300 transition-all duration-300 hover:scale-105 active:scale-95"
	aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
>
	{#if currentTheme === 'dark'}
		<div in:scale={{ duration: 200 }} class="absolute">
			<Moon class="w-5 h-5 dark:text-dark-300 text-light-600" />
		</div>
	{:else}
		<div in:scale={{ duration: 200 }} class="absolute">
			<Sun class="w-5 h-5 text-amber-500" />
		</div>
	{/if}
</button>

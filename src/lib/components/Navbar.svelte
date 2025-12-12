<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { Menu, X } from 'lucide-svelte';
	import navigation from '$lib/data/navigation.json';
	import company from '$lib/data/company.json';
	import ThemeToggle from './ThemeToggle.svelte';

	let isOpen = $state(false);
	let scrolled = $state(false);
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if mounted}
	<header
		class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
			? 'dark:bg-dark-950/80 bg-white/80 backdrop-blur-xl border-b dark:border-dark-800/50 border-light-300/50'
			: 'bg-transparent'}"
		in:fly={{ y: -100, duration: 600 }}
	>
		<nav class="container-custom">
			<div class="flex items-center justify-between h-20">
				<!-- Logo -->
				<a
					href="/"
					class="flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-transform"
				>
					<img
						src="/images/logo.png"
						alt={company.name}
						class="w-12 h-12 object-contain"
					/>
					<span class="text-xl font-display font-bold dark:text-white text-light-900">
						{company.name}
					</span>
				</a>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center gap-1">
					{#each navigation.mainNav as item, index}
						<a
							href={item.href}
							class="px-4 py-2 text-sm dark:text-dark-300 text-light-600 dark:hover:text-white hover:text-light-900 transition-colors rounded-lg dark:hover:bg-dark-800/50 hover:bg-light-200/50"
							in:fly={{ y: -20, duration: 400, delay: index * 100 }}
						>
							{item.label}
						</a>
					{/each}
				</div>

				<!-- Right side: Theme Toggle + CTA -->
				<div class="hidden md:flex items-center gap-3">
					<ThemeToggle />
					<a
						href="#contact"
						class="btn-primary hover:scale-105 active:scale-95 transition-transform"
					>
						Get in Touch
					</a>
				</div>

				<!-- Mobile: Theme Toggle + Menu Button -->
				<div class="md:hidden flex items-center gap-2">
					<ThemeToggle />
					<button
						onclick={() => (isOpen = !isOpen)}
						class="p-2 dark:text-dark-300 text-light-600 dark:hover:text-white hover:text-light-900"
					>
						{#if isOpen}
							<X size={24} />
						{:else}
							<Menu size={24} />
						{/if}
					</button>
				</div>
			</div>
		</nav>

		<!-- Mobile Menu -->
		{#if isOpen}
			<div
				class="md:hidden dark:bg-dark-900/95 bg-white/95 backdrop-blur-xl border-t dark:border-dark-800 border-light-300"
				transition:slide={{ duration: 300 }}
			>
				<div class="container-custom py-6 space-y-2">
					{#each navigation.mainNav as item, index}
						<a
							href={item.href}
							onclick={() => (isOpen = false)}
							class="block px-4 py-3 dark:text-dark-200 text-light-700 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-800 hover:bg-light-200 rounded-lg transition-colors"
							in:fly={{ x: -20, duration: 300, delay: index * 50 }}
						>
							{item.label}
						</a>
					{/each}
					<div class="pt-4">
						<a href="#contact" class="btn-primary w-full text-center">Get in Touch</a>
					</div>
				</div>
			</div>
		{/if}
	</header>
{/if}

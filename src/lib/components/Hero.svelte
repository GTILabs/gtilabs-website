<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { ArrowRight, ChevronDown } from 'lucide-svelte';
	import company from '$lib/data/company.json';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Animated background orbs -->
	<div class="absolute inset-0 overflow-hidden">
		<div
			class="absolute top-1/4 -left-32 w-96 h-96 rounded-full dark:bg-accent-pink/20 bg-accent-pink/30 blur-[120px] animate-float"
		></div>
		<div
			class="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full dark:bg-accent-purple/20 bg-accent-purple/30 blur-[120px] animate-float animation-delay-400"
		></div>
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full dark:bg-accent-teal/10 bg-accent-teal/20 blur-[150px] animate-pulse-slow"
		></div>
	</div>

	<div class="container-custom relative z-10 pt-20">
		{#if mounted}
			<div class="max-w-5xl mx-auto text-center">
				<!-- Badge -->
				<div
					class="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-dark-800/80 bg-white/80 border dark:border-dark-700 border-light-300 backdrop-blur-sm mb-8"
					in:fly={{ y: 20, duration: 600 }}
				>
					<span class="relative flex h-2 w-2">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"
						></span>
						<span class="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
					</span>
					<span class="text-sm dark:text-dark-300 text-light-600">Available for new projects</span>
				</div>

				<!-- Main heading -->
				<h1
					class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
					in:fly={{ y: 30, duration: 600, delay: 100 }}
				>
					<span class="dark:text-white text-light-900">Transforming Ideas</span>
					<br />
					<span class="gradient-text">into Digital Excellence</span>
				</h1>

				<!-- Subtitle -->
				<p
					class="text-lg md:text-xl dark:text-dark-300 text-light-600 max-w-2xl mx-auto mb-10 text-balance"
					in:fly={{ y: 30, duration: 600, delay: 200 }}
				>
					{company.description}
				</p>

				<!-- CTA Buttons -->
				<div
					class="flex flex-col sm:flex-row items-center justify-center gap-4"
					in:fly={{ y: 30, duration: 600, delay: 300 }}
				>
					<a
						href="#contact"
						class="btn-primary group hover:scale-105 active:scale-95 transition-transform"
					>
						Start Your Project
						<ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</a>
					<a
						href="#portfolio"
						class="btn-secondary hover:scale-105 active:scale-95 transition-transform"
					>
						View Our Work
					</a>
				</div>

				<!-- Stats -->
				<div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8" in:fly={{ y: 40, duration: 600, delay: 500 }}>
					{#each company.stats as stat, index}
						<div class="text-center" in:fly={{ y: 20, duration: 400, delay: 600 + index * 100 }}>
							<div class="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
								{stat.value}
							</div>
							<div class="text-sm dark:text-dark-400 text-light-500">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<!-- Scroll indicator -->
	{#if mounted}
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2" in:fade={{ delay: 1200 }}>
			<a
				href="#about"
				class="flex flex-col items-center gap-2 dark:text-dark-500 text-light-500 dark:hover:text-dark-300 hover:text-light-700 transition-colors animate-float"
			>
				<span class="text-xs uppercase tracking-widest">Scroll</span>
				<ChevronDown size={20} />
			</a>
		</div>
	{/if}
</section>

<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { ExternalLink } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';
	import portfolio from '$lib/data/portfolio.json';

	let isVisible = $state(false);
	let hoveredId = $state<string | null>(null);
	let activeCategory = $state('All');

	const categories = ['All', ...new Set(portfolio.projects.map((p) => p.category))];
	let filteredProjects = $derived(
		activeCategory === 'All'
			? portfolio.projects
			: portfolio.projects.filter((p) => p.category === activeCategory)
	);
</script>

<section id="portfolio" class="section-padding relative">
	<div class="container-custom" use:inview oninview={() => (isVisible = true)}>
		{#if isVisible}
			<!-- Header -->
			<div class="text-center max-w-3xl mx-auto mb-12">
				<span
					class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
					in:fly={{ y: 20, duration: 500 }}
				>
					Our Portfolio
				</span>

				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
					in:fly={{ y: 30, duration: 500, delay: 100 }}
				>
					Projects We're{' '}
					<span class="gradient-text">Proud Of</span>
				</h2>

				<p
					class="dark:text-dark-300 text-light-600 text-lg"
					in:fly={{ y: 30, duration: 500, delay: 200 }}
				>
					Explore some of our recent work across various industries and technologies.
				</p>
			</div>

			<!-- Category Filter -->
			<div
				class="flex flex-wrap justify-center gap-2 mb-12"
				in:fly={{ y: 20, duration: 500, delay: 300 }}
			>
				{#each categories as category}
					<button
						onclick={() => (activeCategory = category)}
						class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 {activeCategory ===
						category
							? 'bg-primary-500 text-white'
							: 'dark:bg-dark-800 bg-light-200 dark:text-dark-300 text-light-600 dark:hover:bg-dark-700 hover:bg-light-300 dark:hover:text-white hover:text-light-900'}"
					>
						{category}
					</button>
				{/each}
			</div>

			<!-- Projects Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each filteredProjects as project, index (project.id)}
					<div
						class="group relative rounded-2xl overflow-hidden cursor-pointer"
						in:fly={{ y: 30, duration: 500, delay: 100 + index * 100 }}
						onmouseenter={() => (hoveredId = project.id)}
						onmouseleave={() => (hoveredId = null)}
					>
						<!-- Background with gradient -->
						<div
							class="aspect-[4/3] relative"
							style="background: linear-gradient(135deg, {project.color}20 0%, {project.color}05 100%)"
						>
							<!-- Decorative elements -->
							<div class="absolute inset-0 flex items-center justify-center">
								<div
									class="w-32 h-32 rounded-full blur-3xl opacity-30"
									style="background-color: {project.color}"
								></div>
							</div>

							<!-- Category badge -->
							<div
								class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
								style="background-color: {project.color}"
							>
								{project.category}
							</div>

							<!-- Hover overlay -->
							<div
								class="absolute inset-0 dark:bg-dark-950/80 bg-light-900/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 {hoveredId ===
								project.id
									? 'opacity-100'
									: 'opacity-0'}"
							>
								{#if hoveredId === project.id}
									<div
										class="w-12 h-12 rounded-full dark:bg-white bg-light-900 flex items-center justify-center"
										in:scale={{ duration: 200 }}
									>
										<ExternalLink class="w-5 h-5 dark:text-dark-900 text-white" />
									</div>
								{/if}
							</div>
						</div>

						<!-- Content -->
						<div
							class="p-6 dark:bg-dark-800/50 bg-white/80 backdrop-blur border-t dark:border-dark-700/50 border-light-300/50"
						>
							<h3
								class="text-lg font-semibold dark:text-white text-light-900 mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
							>
								{project.title}
							</h3>
							<p class="dark:text-dark-400 text-light-500 text-sm mb-4 line-clamp-2">
								{project.description}
							</p>

							<!-- Tech stack -->
							<div class="flex flex-wrap gap-2">
								{#each project.technologies.slice(0, 4) as tech}
									<span class="tech-badge">{tech}</span>
								{/each}
								{#if project.technologies.length > 4}
									<span class="tech-badge">+{project.technologies.length - 4}</span>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- View All CTA -->
			<div class="text-center mt-12" in:fly={{ y: 20, duration: 500, delay: 600 }}>
				<a href="/portfolio" class="btn-secondary">View All Projects</a>
			</div>
		{/if}
	</div>
</section>

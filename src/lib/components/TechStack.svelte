<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { inview } from '$lib/actions/inview';
	import techstack from '$lib/data/techstack.json';

	let isVisible = $state(false);
</script>

<section id="techstack" class="section-padding relative dark:bg-dark-900/30 bg-light-100/50">
	<div class="container-custom" use:inview oninview={() => (isVisible = true)}>
		{#if isVisible}
			<!-- Header -->
			<div class="text-center max-w-3xl mx-auto mb-16">
				<span
					class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
					in:fly={{ y: 20, duration: 500 }}
				>
					Tech Stack
				</span>

				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
					in:fly={{ y: 30, duration: 500, delay: 100 }}
				>
					Technologies We{' '}
					<span class="gradient-text">Master</span>
				</h2>

				<p
					class="dark:text-dark-300 text-light-600 text-lg"
					in:fly={{ y: 30, duration: 500, delay: 200 }}
				>
					We stay at the forefront of technology, using the best tools for each project.
				</p>
			</div>

			<!-- Tech Categories -->
			<div class="space-y-8">
				{#each techstack.categories as category, catIndex}
					<div
						class="glass-card p-6 md:p-8"
						in:fly={{ y: 30, duration: 500, delay: 100 + catIndex * 100 }}
					>
						<h3
							class="text-lg font-semibold dark:text-white text-light-900 mb-6 flex items-center gap-3"
						>
							<span class="w-2 h-2 rounded-full bg-primary-500"></span>
							{category.name}
						</h3>

						<div class="flex flex-wrap gap-3">
							{#each category.technologies as tech, techIndex}
								<div
									class="flex items-center gap-2 px-4 py-2.5 rounded-xl dark:bg-dark-800/80 bg-white/80 border dark:border-dark-700 border-light-300 dark:hover:border-primary-500/30 hover:border-primary-500/30 dark:hover:bg-dark-800 hover:bg-white transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5"
									in:scale={{
										duration: 300,
										delay: 200 + catIndex * 100 + techIndex * 50
									}}
								>
									<span class="text-xl">{tech.icon}</span>
									<span class="text-sm font-medium dark:text-dark-200 text-light-700">
										{tech.name}
									</span>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>

			<!-- Additional Info -->
			<div class="mt-12 text-center" in:fly={{ y: 30, duration: 500, delay: 600 }}>
				<p class="dark:text-dark-400 text-light-500 text-sm">
					Don't see your preferred technology? No worries – our team is always learning and adapting
					to new tools.{' '}
					<a
						href="#contact"
						class="text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 underline"
					>
						Let's discuss your requirements
					</a>
				</p>
			</div>
		{/if}
	</div>
</section>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Github, Linkedin, Twitter } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';
	import team from '$lib/data/team.json';

	let isVisible = $state(false);
</script>

<section id="team" class="section-padding relative">
	<div class="container-custom" use:inview oninview={() => (isVisible = true)}>
		{#if isVisible}
			<!-- Header -->
			<div class="text-center max-w-3xl mx-auto mb-16">
				<span
					class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
					in:fly={{ y: 20, duration: 500 }}
				>
					Our Team
				</span>

				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
					in:fly={{ y: 30, duration: 500, delay: 100 }}
				>
					Meet the{' '}
					<span class="gradient-text">Experts</span>
				</h2>

				<p
					class="dark:text-dark-300 text-light-600 text-lg"
					in:fly={{ y: 30, duration: 500, delay: 200 }}
				>
					Our talented team brings together diverse expertise and a shared passion for building
					exceptional software.
				</p>
			</div>

			<!-- Team Grid -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each team.team as member, index}
					<div
						class="group glass-card p-6 text-center hover:border-primary-500/30 transition-all duration-300"
						in:fly={{ y: 30, duration: 500, delay: 100 + index * 100 }}
					>
						<!-- Avatar -->
						<div class="relative w-28 h-28 mx-auto mb-6">
							<div
								class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple opacity-20 group-hover:opacity-40 transition-opacity"
							></div>
							<div
								class="relative w-full h-full rounded-full dark:bg-dark-700 bg-light-200 flex items-center justify-center overflow-hidden"
							>
								{#if member.image}
									<img
										src={member.image}
										alt={member.name}
										class="w-full h-full object-cover"
									/>
								{:else}
									<span
										class="text-2xl font-bold dark:text-dark-300 text-light-600 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
									>
										{member.name
											.split(' ')
											.map((n) => n[0])
											.join('')}
									</span>
								{/if}
							</div>
							<!-- Online indicator -->
							<div
								class="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-accent-teal border-2 dark:border-dark-900 border-white"
							></div>
						</div>

						<!-- Info -->
						<h3
							class="text-lg font-semibold dark:text-white text-light-900 mb-1 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
						>
							{member.name}
						</h3>
						<p class="text-primary-500 dark:text-primary-400 text-sm font-medium mb-3">
							{member.role}
						</p>
						<p class="dark:text-dark-400 text-light-500 text-sm leading-relaxed mb-4">
							{member.bio}
						</p>

						<!-- Social Links -->
						<div class="flex items-center justify-center gap-3">
							{#if member.linkedin}
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
								>
									<Linkedin class="w-4 h-4" />
								</a>
							{/if}
							{#if member.github}
								<a
									href={member.github}
									target="_blank"
									rel="noopener noreferrer"
									class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
								>
									<Github class="w-4 h-4" />
								</a>
							{/if}
							{#if member.twitter}
								<a
									href={member.twitter}
									target="_blank"
									rel="noopener noreferrer"
									class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
								>
									<Twitter class="w-4 h-4" />
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<!-- Join Team CTA -->
			<div class="mt-16 text-center" in:fly={{ y: 30, duration: 500, delay: 600 }}>
				<div class="glass-card inline-block p-8 md:p-12">
					<h3 class="text-xl md:text-2xl font-display font-bold dark:text-white text-light-900 mb-4">
						Want to Join Our Team?
					</h3>
					<p class="dark:text-dark-300 text-light-600 mb-6 max-w-md">
						We're always looking for talented individuals who share our passion for technology.
					</p>
					<a href="/careers" class="btn-primary">View Open Positions</a>
				</div>
			</div>
		{/if}
	</div>
</section>

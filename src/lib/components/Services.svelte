<script lang="ts">
	import { fly } from 'svelte/transition';
	import { ArrowUpRight, BarChart3, Cloud, Code2, Lightbulb, Smartphone, Wrench } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';
	import services from '$lib/data/services.json';

	let isVisible = $state(false);

	function getIcon(iconName: string) {
		const icons: Record<string, typeof Code2> = {
			Code2,
			Cloud,
			Smartphone,
			Lightbulb,
			BarChart3,
			Wrench
		};
		return icons[iconName] || Code2;
	}
</script>

<section id="services" class="section-padding relative dark:bg-dark-900/30 bg-light-100/50">
	<div class="container-custom" use:inview oninview={() => (isVisible = true)}>
		{#if isVisible}
			<!-- Header -->
			<div class="text-center max-w-3xl mx-auto mb-16">
				<span
					class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
					in:fly={{ y: 20, duration: 500 }}
				>
					Our Services
				</span>

				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
					in:fly={{ y: 30, duration: 500, delay: 100 }}
				>
					End-to-End{' '}
					<span class="gradient-text">IT Solutions</span>
				</h2>

				<p
					class="dark:text-dark-300 text-light-600 text-lg"
					in:fly={{ y: 30, duration: 500, delay: 200 }}
				>
					From concept to deployment and beyond, we provide comprehensive services to help your
					business thrive in the digital age.
				</p>
			</div>

			<!-- Services Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each services.services as service, index}
					{@const Icon = getIcon(service.icon)}
					<div
						class="group relative glass-card p-8 hover:border-primary-500/30 transition-all duration-500"
						in:fly={{ y: 30, duration: 500, delay: 100 + index * 100 }}
					>
						<!-- Hover gradient effect -->
						<div
							class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						></div>

						<div class="relative">
							<!-- Icon -->
							<div
								class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
							>
								<Icon class="w-7 h-7" />
							</div>

							<!-- Title -->
							<h3
								class="text-xl font-semibold dark:text-white text-light-900 mb-3 flex items-center gap-2"
							>
								{service.title}
								<ArrowUpRight
									class="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
								/>
							</h3>

							<!-- Description -->
							<p class="dark:text-dark-400 text-light-500 text-sm leading-relaxed mb-6">
								{service.description}
							</p>

							<!-- Features -->
							<ul class="space-y-2">
								{#each service.features as feature}
									<li class="flex items-center gap-2 text-sm dark:text-dark-300 text-light-600">
										<span class="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

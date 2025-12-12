<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Shield, Target, Users, Zap } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';
	import company from '$lib/data/company.json';

	let isVisible = $state(false);

	function getIcon(title: string) {
		const icons: Record<string, typeof Zap> = {
			Innovation: Zap,
			Quality: Target,
			Collaboration: Users,
			Integrity: Shield
		};
		return icons[title] || Zap;
	}
</script>

<section id="about" class="section-padding relative">
	<div class="container-custom" use:inview oninview={() => (isVisible = true)}>
		{#if isVisible}
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<!-- Left content -->
				<div>
					<div in:fly={{ y: 30, duration: 600 }}>
						<span
							class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
						>
							About Us
						</span>
					</div>

					<h2
						class="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
						in:fly={{ y: 30, duration: 600, delay: 100 }}
					>
						We Build Software That{' '}
						<span class="gradient-text">Powers Business</span>
					</h2>

					<p
						class="dark:text-dark-300 text-light-600 text-lg mb-8 leading-relaxed"
						in:fly={{ y: 30, duration: 600, delay: 200 }}
					>
						Founded in {company.founded}, {company.name} has grown from a small team of passionate
						developers into a full-service IT company. Based in {company.location}, we serve clients
						across Southeast Asia and beyond, delivering innovative solutions that drive real business
						results.
					</p>

					<p
						class="dark:text-dark-300 text-light-600 text-lg mb-8 leading-relaxed"
						in:fly={{ y: 30, duration: 600, delay: 300 }}
					>
						Our team combines deep technical expertise with a genuine understanding of business
						challenges. We don't just write code – we craft solutions that make a difference.
					</p>

					<div class="flex flex-wrap gap-4" in:fly={{ y: 30, duration: 600, delay: 400 }}>
						<div class="flex items-center gap-2 dark:text-dark-300 text-light-600">
							<div class="w-2 h-2 rounded-full bg-accent-teal"></div>
							<span>Enterprise Solutions</span>
						</div>
						<div class="flex items-center gap-2 dark:text-dark-300 text-light-600">
							<div class="w-2 h-2 rounded-full bg-accent-blue"></div>
							<span>Cloud Native</span>
						</div>
						<div class="flex items-center gap-2 dark:text-dark-300 text-light-600">
							<div class="w-2 h-2 rounded-full bg-accent-purple"></div>
							<span>Agile Delivery</span>
						</div>
					</div>
				</div>

				<!-- Right content - Values -->
				<div class="grid sm:grid-cols-2 gap-6">
					{#each company.values as value, index}
						{@const Icon = getIcon(value.title)}
						<div
							class="glass-card p-6 group hover:border-primary-500/30 transition-all duration-300"
							in:fly={{ y: 30, duration: 500, delay: 200 + index * 100 }}
						>
							<div
								class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform"
							>
								<Icon class="w-6 h-6" />
							</div>
							<h3 class="text-lg font-semibold dark:text-white text-light-900 mb-2">
								{value.title}
							</h3>
							<p class="dark:text-dark-400 text-light-500 text-sm leading-relaxed">
								{value.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>

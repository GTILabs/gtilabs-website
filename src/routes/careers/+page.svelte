<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import {
		Briefcase,
		MapPin,
		Clock,
		ChevronDown,
		ChevronUp,
		ArrowLeft,
		Heart,
		Laptop,
		GraduationCap,
		Users,
		Coffee,
		Shield
	} from 'lucide-svelte';
	import careers from '$lib/data/careers.json';

	let expandedJob = $state<string | null>(null);

	function toggleJob(jobId: string) {
		expandedJob = expandedJob === jobId ? null : jobId;
	}

	const benefitIcons: Record<string, typeof Heart> = {
		'Competitive Salary': Briefcase,
		'Remote Friendly': Laptop,
		'Health Benefits': Heart,
		'Learning & Growth': GraduationCap,
		'Work-Life Balance': Coffee,
		'Great Team': Users
	};

	function getBenefitIcon(title: string) {
		return benefitIcons[title] || Heart;
	}
</script>

<svelte:head>
	<title>Careers - GTI Labs</title>
	<meta
		name="description"
		content="Join GTI Labs and build the future of technology. Explore our open positions in engineering, design, and more."
	/>
</svelte:head>

<div class="min-h-screen dark:bg-dark-950 bg-light-50">
	<!-- Hero Section -->
	<section class="relative pt-32 pb-20 overflow-hidden">
		<!-- Background -->
		<div
			class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full dark:bg-primary-500/10 bg-primary-500/20 blur-[150px]"
		></div>

		<div class="container-custom relative">
			<!-- Back Link -->
			<a
				href="/"
				class="inline-flex items-center gap-2 dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mb-8"
				in:fly={{ y: 20, duration: 500 }}
			>
				<ArrowLeft class="w-4 h-4" />
				Back to Home
			</a>

			<div class="text-center max-w-3xl mx-auto">
				<span
					class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
					in:fly={{ y: 20, duration: 500, delay: 100 }}
				>
					We're Hiring
				</span>

				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-display font-bold dark:text-white text-light-900 mb-6"
					in:fly={{ y: 30, duration: 500, delay: 200 }}
				>
					{careers.title}{' '}
					<span class="gradient-text">{careers.subtitle}</span>
				</h1>

				<p
					class="dark:text-dark-300 text-light-600 text-lg md:text-xl"
					in:fly={{ y: 30, duration: 500, delay: 300 }}
				>
					{careers.description}
				</p>
			</div>
		</div>
	</section>

	<!-- Benefits Section -->
	<section class="py-16">
		<div class="container-custom">
			<h2
				class="text-2xl md:text-3xl font-display font-bold dark:text-white text-light-900 text-center mb-12"
				in:fly={{ y: 20, duration: 500, delay: 400 }}
			>
				Why Join <span class="gradient-text">GTI Labs</span>?
			</h2>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each careers.benefits as benefit, index}
					{@const Icon = getBenefitIcon(benefit.title)}
					<div
						class="glass-card p-6 hover:border-primary-500/30 transition-all"
						in:fly={{ y: 30, duration: 500, delay: 500 + index * 100 }}
					>
						<div
							class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-4"
						>
							<Icon class="w-6 h-6" />
						</div>
						<h3 class="dark:text-white text-light-900 font-semibold mb-2">{benefit.title}</h3>
						<p class="dark:text-dark-400 text-light-500 text-sm">{benefit.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Open Positions Section -->
	<section class="py-16">
		<div class="container-custom">
			<div class="text-center mb-12">
				<h2
					class="text-2xl md:text-3xl font-display font-bold dark:text-white text-light-900 mb-4"
				>
					Open <span class="gradient-text">Positions</span>
				</h2>
				<p class="dark:text-dark-400 text-light-500">
					{careers.positions.length} positions available
				</p>
			</div>

			<div class="max-w-4xl mx-auto space-y-4">
				{#each careers.positions as job, index}
					<div
						class="glass-card overflow-hidden transition-all"
						in:fly={{ y: 30, duration: 500, delay: 100 + index * 50 }}
					>
						<!-- Job Header -->
						<button
							class="w-full p-6 flex items-center justify-between text-left hover:bg-primary-500/5 transition-colors"
							onclick={() => toggleJob(job.id)}
						>
							<div class="flex-1">
								<div class="flex flex-wrap items-center gap-3 mb-2">
									<h3 class="dark:text-white text-light-900 font-semibold text-lg">
										{job.title}
									</h3>
									<span
										class="px-2 py-0.5 text-xs font-medium rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400"
									>
										{job.department}
									</span>
								</div>
								<div
									class="flex flex-wrap items-center gap-4 dark:text-dark-400 text-light-500 text-sm"
								>
									<span class="flex items-center gap-1.5">
										<MapPin class="w-4 h-4" />
										{job.location}
									</span>
									<span class="flex items-center gap-1.5">
										<Clock class="w-4 h-4" />
										{job.type}
									</span>
								</div>
							</div>
							<div class="dark:text-dark-400 text-light-500 ml-4">
								{#if expandedJob === job.id}
									<ChevronUp class="w-5 h-5" />
								{:else}
									<ChevronDown class="w-5 h-5" />
								{/if}
							</div>
						</button>

						<!-- Job Details -->
						{#if expandedJob === job.id}
							<div
								class="px-6 pb-6 border-t dark:border-dark-700 border-light-300"
								in:fade={{ duration: 200 }}
							>
								<div class="pt-6 space-y-6">
									<div>
										<p class="dark:text-dark-300 text-light-600">{job.description}</p>
									</div>

									<div>
										<h4 class="dark:text-white text-light-900 font-semibold mb-3">Requirements</h4>
										<ul class="space-y-2">
											{#each job.requirements as req}
												<li class="flex items-start gap-2 dark:text-dark-400 text-light-500 text-sm">
													<span class="text-primary-500 mt-1">&#8226;</span>
													{req}
												</li>
											{/each}
										</ul>
									</div>

									<div>
										<h4 class="dark:text-white text-light-900 font-semibold mb-3">
											Responsibilities
										</h4>
										<ul class="space-y-2">
											{#each job.responsibilities as resp}
												<li class="flex items-start gap-2 dark:text-dark-400 text-light-500 text-sm">
													<span class="text-primary-500 mt-1">&#8226;</span>
													{resp}
												</li>
											{/each}
										</ul>
									</div>

									<div class="pt-4">
										<a
											href="mailto:careers@gtilabs.id?subject=Application for {job.title}"
											class="btn-primary"
										>
											Apply for this Position
										</a>
									</div>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20">
		<div class="container-custom">
			<div class="glass-card p-8 md:p-12 text-center relative overflow-hidden">
				<div
					class="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-500/10 blur-[100px]"
				></div>
				<div
					class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-purple/10 blur-[100px]"
				></div>

				<div class="relative">
					<h2
						class="text-2xl md:text-3xl font-display font-bold dark:text-white text-light-900 mb-4"
					>
						Don't See the Right Role?
					</h2>
					<p class="dark:text-dark-400 text-light-500 mb-8 max-w-2xl mx-auto">
						We're always looking for talented people. Send us your resume and let us know how you
						can contribute to our team.
					</p>
					<a href="mailto:careers@gtilabs.id?subject=General Application" class="btn-primary">
						Send Your Resume
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

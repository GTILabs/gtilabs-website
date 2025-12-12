<script lang="ts">
	import { fly } from 'svelte/transition';
	import { ChevronLeft, ChevronRight, Quote } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';
	import clients from '$lib/data/clients.json';

	let isVisible = $state(false);
	let currentIndex = $state(0);

	function nextTestimonial() {
		currentIndex = (currentIndex + 1) % clients.testimonials.length;
	}

	function prevTestimonial() {
		currentIndex = (currentIndex - 1 + clients.testimonials.length) % clients.testimonials.length;
	}
</script>

<section class="section-padding relative dark:bg-dark-900/30 bg-light-100/50 overflow-hidden">
	<!-- Background decoration -->
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full dark:bg-primary-500/5 bg-primary-500/10 blur-[150px]"
	></div>

	<div class="container-custom relative" use:inview oninview={() => (isVisible = true)}>
		{#if isVisible}
			<!-- Header -->
			<div class="text-center max-w-3xl mx-auto mb-16">
				<span
					class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
					in:fly={{ y: 20, duration: 500 }}
				>
					Testimonials
				</span>

				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
					in:fly={{ y: 30, duration: 500, delay: 100 }}
				>
					What Our Clients{' '}
					<span class="gradient-text">Say</span>
				</h2>
			</div>

			<!-- Testimonials Carousel -->
			<div class="max-w-4xl mx-auto" in:fly={{ y: 30, duration: 500, delay: 200 }}>
				<div class="glass-card p-8 md:p-12 relative">
					<!-- Quote icon -->
					<div
						class="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center"
					>
						<Quote class="w-6 h-6 text-white" />
					</div>

					<!-- Testimonial content -->
					<div class="relative">
						{#key currentIndex}
							<div in:fly={{ x: 20, duration: 300 }}>
								<p
									class="text-lg md:text-xl dark:text-dark-200 text-light-700 leading-relaxed mb-8 italic"
								>
									"{clients.testimonials[currentIndex].quote}"
								</p>

								<div class="flex items-center gap-4">
									<!-- Avatar -->
									<div
										class="w-14 h-14 rounded-full dark:bg-dark-700 bg-light-200 flex items-center justify-center"
									>
										<span class="text-lg font-bold text-primary-500 dark:text-primary-400">
											{clients.testimonials[currentIndex].author
												.split(' ')
												.map((n) => n[0])
												.join('')}
										</span>
									</div>

									<!-- Info -->
									<div>
										<p class="font-semibold dark:text-white text-light-900">
											{clients.testimonials[currentIndex].author}
										</p>
										<p class="text-sm dark:text-dark-400 text-light-500">
											{clients.testimonials[currentIndex].role}, {clients.testimonials[currentIndex]
												.company}
										</p>
									</div>
								</div>
							</div>
						{/key}
					</div>

					<!-- Navigation -->
					<div class="absolute bottom-8 right-8 flex items-center gap-2">
						<button
							onclick={prevTestimonial}
							class="w-10 h-10 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
						>
							<ChevronLeft class="w-5 h-5" />
						</button>
						<button
							onclick={nextTestimonial}
							class="w-10 h-10 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
						>
							<ChevronRight class="w-5 h-5" />
						</button>
					</div>

					<!-- Indicators -->
					<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
						{#each clients.testimonials as _, index}
							<button
								onclick={() => (currentIndex = index)}
								class="w-2 h-2 rounded-full transition-all {index === currentIndex
									? 'w-6 bg-primary-500'
									: 'dark:bg-dark-600 bg-light-400 dark:hover:bg-dark-500 hover:bg-light-500'}"
							></button>
						{/each}
					</div>
				</div>
			</div>

			<!-- Client Logos -->
			<div class="mt-20" in:fly={{ y: 30, duration: 500, delay: 400 }}>
				<p class="text-center dark:text-dark-500 text-light-500 text-sm mb-8 uppercase tracking-widest">
					Trusted by Leading Companies
				</p>
				<div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
					{#each clients.clients as client, index}
						<div
							class="px-6 py-3 rounded-lg dark:bg-dark-800/50 bg-white/80 dark:text-dark-400 text-light-600 dark:hover:text-dark-200 hover:text-light-800 dark:hover:bg-dark-800 hover:bg-white transition-all cursor-default"
							in:fly={{ y: 20, duration: 300, delay: 500 + index * 100 }}
						>
							<span class="font-medium">{client.name}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>

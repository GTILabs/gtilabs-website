<script lang="ts">
	import { ArrowUp, Github, Instagram, Linkedin, Twitter } from 'lucide-svelte';
	import company from '$lib/data/company.json';
	import navigation from '$lib/data/navigation.json';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative dark:bg-dark-900/50 bg-light-100/80 border-t dark:border-dark-800 border-light-300">
	<div class="container-custom py-16">
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
			<!-- Brand -->
			<div class="lg:col-span-1">
				<a href="/" class="flex items-center gap-3 mb-6">
					<img src="/images/logo.png" alt={company.name} class="w-12 h-12 object-contain" />
					<span class="text-xl font-display font-bold dark:text-white text-light-900">
						{company.name}
					</span>
				</a>
				<p class="dark:text-dark-400 text-light-500 text-sm mb-6 leading-relaxed">
					{company.tagline}. Building the future of digital experiences, one project at a time.
				</p>
				<!-- Social Links -->
				<div class="flex gap-3">
					<a
						href={company.social.github}
						target="_blank"
						rel="noopener noreferrer"
						class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
					>
						<Github class="w-4 h-4" />
					</a>
					<a
						href={company.social.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
					>
						<Linkedin class="w-4 h-4" />
					</a>
					<a
						href={company.social.twitter}
						target="_blank"
						rel="noopener noreferrer"
						class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
					>
						<Twitter class="w-4 h-4" />
					</a>
					<a
						href={company.social.instagram}
						target="_blank"
						rel="noopener noreferrer"
						class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
					>
						<Instagram class="w-4 h-4" />
					</a>
				</div>
			</div>

			<!-- Services -->
			<div>
				<h4 class="dark:text-white text-light-900 font-semibold mb-4">Services</h4>
				<ul class="space-y-3">
					{#each navigation.footerNav.services as item}
						<li>
							<a
								href={item.href}
								class="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Company -->
			<div>
				<h4 class="dark:text-white text-light-900 font-semibold mb-4">Company</h4>
				<ul class="space-y-3">
					{#each navigation.footerNav.company as item}
						<li>
							<a
								href={item.href}
								class="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Resources -->
			<div>
				<h4 class="dark:text-white text-light-900 font-semibold mb-4">Resources</h4>
				<ul class="space-y-3">
					{#each navigation.footerNav.resources as item}
						<li>
							<a
								href={item.href}
								class="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Bottom bar -->
		<div
			class="pt-8 border-t dark:border-dark-800 border-light-300 flex flex-col sm:flex-row items-center justify-between gap-4"
		>
			<p class="dark:text-dark-500 text-light-500 text-sm">
				© {currentYear}
				{company.name}. All rights reserved.
			</p>
			<div class="flex items-center gap-6">
				<a
					href="/privacy"
					class="dark:text-dark-500 text-light-500 dark:hover:text-dark-300 hover:text-light-700 text-sm transition-colors"
				>
					Privacy Policy
				</a>
				<a
					href="/terms"
					class="dark:text-dark-500 text-light-500 dark:hover:text-dark-300 hover:text-light-700 text-sm transition-colors"
				>
					Terms of Service
				</a>
			</div>
		</div>
	</div>

	<!-- Back to top button -->
	<button
		onclick={scrollToTop}
		class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 hover:bg-primary-400 hover:scale-110 active:scale-90 transition-all z-40"
	>
		<ArrowUp class="w-5 h-5" />
	</button>
</footer>

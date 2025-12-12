<script lang="ts">
	import { fly } from 'svelte/transition';
	import { CheckCircle, Loader2, Mail, MapPin, Phone, Send, AlertCircle } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';
	import company from '$lib/data/company.json';

	let isVisible = $state(false);
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		errorMessage = '';

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		try {
			// Using FormSubmit service
			const response = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					firstName: formData.get('firstName'),
					lastName: formData.get('lastName'),
					email: formData.get('email'),
					company: formData.get('company'),
					projectType: formData.get('projectType'),
					message: formData.get('message'),
					_subject: 'New Contact from GTI Labs Website'
				})
			});

			if (response.ok) {
				isSubmitted = true;
				form.reset();
				setTimeout(() => (isSubmitted = false), 5000);
			} else {
				errorMessage = 'Failed to send message. Please try again.';
			}
		} catch (error) {
			console.error('Form submission error:', error);
			errorMessage = 'Network error. Please check your connection and try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section id="contact" class="section-padding relative">
	<!-- Background elements -->
	<div
		class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full dark:bg-primary-500/10 bg-primary-500/20 blur-[150px]"
	></div>
	<div
		class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full dark:bg-accent-purple/10 bg-accent-purple/20 blur-[150px]"
	></div>

	<div class="container-custom relative" use:inview oninview={() => (isVisible = true)}>
		{#if isVisible}
			<!-- Header -->
			<div class="text-center max-w-3xl mx-auto mb-16">
				<span
					class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
					in:fly={{ y: 20, duration: 500 }}
				>
					Contact Us
				</span>

				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
					in:fly={{ y: 30, duration: 500, delay: 100 }}
				>
					Let's Build Something{' '}
					<span class="gradient-text">Amazing</span>
				</h2>

				<p
					class="dark:text-dark-300 text-light-600 text-lg"
					in:fly={{ y: 30, duration: 500, delay: 200 }}
				>
					Ready to start your project? Get in touch with us and let's discuss how we can help.
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-12 items-start">
				<!-- Contact Form -->
				<div in:fly={{ x: -30, duration: 500, delay: 300 }}>
					<div class="glass-card p-8">
						<form onsubmit={handleSubmit} class="space-y-6">
							{#if errorMessage}
								<div
									class="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500"
								>
									<AlertCircle class="w-5 h-5 shrink-0" />
									<p class="text-sm">{errorMessage}</p>
								</div>
							{/if}

							<div class="grid sm:grid-cols-2 gap-6">
								<div>
									<label
										for="firstName"
										class="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2"
									>
										First Name
									</label>
									<input
										type="text"
										id="firstName"
										name="firstName"
										required
										class="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
										placeholder="John"
									/>
								</div>
								<div>
									<label
										for="lastName"
										class="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2"
									>
										Last Name
									</label>
									<input
										type="text"
										id="lastName"
										name="lastName"
										required
										class="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
										placeholder="Doe"
									/>
								</div>
							</div>

							<div>
								<label
									for="email"
									class="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									class="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
									placeholder="john@company.com"
								/>
							</div>

							<div>
								<label
									for="company"
									class="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2"
								>
									Company
								</label>
								<input
									type="text"
									id="company"
									name="company"
									class="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
									placeholder="Your Company"
								/>
							</div>

							<div>
								<label
									for="projectType"
									class="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2"
								>
									Project Type
								</label>
								<select
									id="projectType"
									name="projectType"
									required
									class="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
								>
									<option value="">Select a service</option>
									<option value="Custom Software Development">Custom Software Development</option>
									<option value="Cloud Solutions">Cloud Solutions</option>
									<option value="Mobile Development">Mobile Development</option>
									<option value="IT Consulting">IT Consulting</option>
									<option value="Other">Other</option>
								</select>
							</div>

							<div>
								<label
									for="message"
									class="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									required
									rows="4"
									class="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none resize-none"
									placeholder="Tell us about your project..."
								></textarea>
							</div>

							<button
								type="submit"
								class="btn-primary w-full group"
								disabled={isSubmitting || isSubmitted}
							>
								{#if isSubmitting}
									<Loader2 class="w-5 h-5 mr-2 animate-spin" />
									Sending...
								{:else if isSubmitted}
									<CheckCircle class="w-5 h-5 mr-2" />
									Message Sent!
								{:else}
									Send Message
									<Send class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
								{/if}
							</button>
						</form>
					</div>
				</div>

				<!-- Contact Info -->
				<div class="space-y-8" in:fly={{ x: 30, duration: 500, delay: 400 }}>
					<!-- Contact cards -->
					<div class="glass-card p-6 flex items-start gap-4 hover:border-primary-500/30 transition-all">
						<div
							class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 shrink-0"
						>
							<Mail class="w-5 h-5" />
						</div>
						<div>
							<h3 class="dark:text-white text-light-900 font-semibold mb-1">Email</h3>
							<a
								href="mailto:{company.email}"
								class="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
							>
								{company.email}
							</a>
						</div>
					</div>

					<div class="glass-card p-6 flex items-start gap-4 hover:border-primary-500/30 transition-all">
						<div
							class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 shrink-0"
						>
							<Phone class="w-5 h-5" />
						</div>
						<div>
							<h3 class="dark:text-white text-light-900 font-semibold mb-1">Phone</h3>
							<a
								href="tel:{company.phone}"
								class="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
							>
								{company.phone}
							</a>
						</div>
					</div>

					<div class="glass-card p-6 flex items-start gap-4 hover:border-primary-500/30 transition-all">
						<div
							class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 shrink-0"
						>
							<MapPin class="w-5 h-5" />
						</div>
						<div>
							<h3 class="dark:text-white text-light-900 font-semibold mb-1">Office</h3>
							<p class="dark:text-dark-400 text-light-500">
								{company.address}
							</p>
						</div>
					</div>

					<!-- Social Links -->
					<div class="glass-card p-6">
						<h3 class="dark:text-white text-light-900 font-semibold mb-4">Follow Us</h3>
						<div class="flex gap-3">
							{#each Object.entries(company.social) as [platform, url]}
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									class="w-10 h-10 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-dark-700 hover:bg-light-300 transition-all capitalize"
								>
									{platform[0].toUpperCase()}
								</a>
							{/each}
						</div>
					</div>

					<!-- Map placeholder -->
					<div class="glass-card p-2 aspect-video rounded-2xl overflow-hidden">
						<div
							class="w-full h-full dark:bg-dark-800 bg-light-200 rounded-xl flex items-center justify-center"
						>
							<div class="text-center">
								<MapPin class="w-8 h-8 text-primary-500 mx-auto mb-2" />
								<p class="dark:text-dark-400 text-light-500 text-sm">
									{company.location}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

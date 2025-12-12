<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Team from '$lib/components/Team.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>GTI Labs - Transforming Ideas into Digital Excellence</title>
	<meta
		name="description"
		content="GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation."
	/>
	<meta
		name="keywords"
		content="software development, IT company, Indonesia, cloud solutions, digital transformation, enterprise software"
	/>
	<meta name="author" content="GTI Labs" />

	<!-- Open Graph -->
	<meta property="og:title" content="GTI Labs - Transforming Ideas into Digital Excellence" />
	<meta
		property="og:description"
		content="GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation."
	/>
	<meta property="og:url" content="https://gtilabs.id" />
	<meta property="og:site_name" content="GTI Labs" />
	<meta property="og:image" content="/images/logo.png" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="GTI Labs - Transforming Ideas into Digital Excellence" />
	<meta
		name="twitter:description"
		content="GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation."
	/>
	<meta name="twitter:image" content="/images/logo.png" />
</svelte:head>

<main class="relative overflow-hidden">
	<!-- Background elements -->
	<div class="fixed inset-0 grid-background pointer-events-none"></div>
	<div
		class="fixed inset-0 bg-gradient-to-b dark:from-primary-950/20 from-primary-100/30 via-transparent to-transparent pointer-events-none"
	></div>

	<!-- Content -->
	<Navbar />
	<Hero />
	<About />
	<Services />
	<Portfolio />
	<TechStack />
	<Team />
	<Testimonials />
	<Contact />
	<Footer />
</main>

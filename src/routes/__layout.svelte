<script>
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const style = {
		wrapper: `h-screen max-h-screen h-min-screen w-screen text-black select-none flex flex-col `
		// wrapper: `bg-[#2B222D] h-screen max-h-screen h-min-screen w-screen text-black select-none flex flex-col `
	};
</script>

<svelte:head>
	<title>Home</title>
	<!-- Inter Google Font-->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<!-- <link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/> -->
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="preload"
		href="./fonts/Inter-roman.var.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
</svelte:head>

<div class={style.wrapper}>
	<Header />
	<slot />
	<div class="flex flex-col h-full justify-end">
		<Footer />
	</div>
</div>

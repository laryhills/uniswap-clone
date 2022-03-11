<script>
	import WiDirectionUpRight from 'svelte-icons/wi/WiDirectionUpRight.svelte';
	let selectedNav = 'swap';

	const style = {
		wrapper: `md:hidden p-4 w-screen flex justify-between items-center`,
		headerLogo: `flex w-1/4 items-center justify-start`,
		nav: `flex-1 flex justify-center items-center`,
		navItemsContainer: `flex bg-[#191B1F] rounded-2xl`,
		navItem: `px-3 py-1 m-1 flex items-center text-lg text-[1rem] text-[#E6E6E6] cursor-pointer rounded-xl`,
		activeNavItem: `font-semibold text-white bg-[#212429]`,
		buttonsContainer: `flex w-1/4 justify-end items-center`,
		button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-white text-[0.9rem] font-semibold cursor-pointer`,
		buttonPadding: `p-2`,
		buttonTextContainer: `h-8 hidden sm:flex items-center text-[1rem]`,
		buttonIconContainer: `flex items-center justify-center w-4 mr-2`,
		buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
		icon: `w-6`
	};
</script>

<div class={style.wrapper}>
	<div class={style.nav}>
		<div class={style.navItemsContainer}>
			<div
				class={`${style.navItem} ${selectedNav === 'swap' && style.activeNavItem}`}
				on:click={() => (selectedNav = 'swap')}
			>
				Swap
			</div>
			<div
				class={`${style.navItem} ${selectedNav === 'pool' && style.activeNavItem}`}
				on:click={() => (selectedNav = 'pool')}
			>
				Pool
			</div>
			<div
				class={`${style.navItem} ${selectedNav === 'vote' && style.activeNavItem}`}
				on:click={() => (selectedNav = 'vote')}
			>
				Vote
			</div>
			<a href="#charts" target="_blank" rel="noreferrer">
				<div class={`${style.navItem} flex`}>
					Charts <div class={style.icon}><WiDirectionUpRight /></div>
				</div>
			</a>
		</div>
	</div>
</div>

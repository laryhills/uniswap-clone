<script>
	import WiDirectionUpRight from 'svelte-icons/wi/WiDirectionUpRight.svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import GoKebabHorizontal from 'svelte-icons/go/GoKebabHorizontal.svelte';
	let selectedNav = 'swap';

	const style = {
		wrapper: `p-4 w-screen flex justify-between items-center`,
		headerLogo: `flex w-1/4 items-center justify-start`,
		nav: `hidden flex-1 md:flex justify-center items-center`,
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
	<div class={style.headerLogo}>
		<img src="/logos/uniswap_logo.svg" class="change-color" alt="Uniswap" width="35" height="35" />
	</div>

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
	<div class={style.buttonsContainer}>
		<div class={`${style.button} ${style.buttonPadding}`}>
			<div class={style.buttonIconContainer}>
				<img src="/logos/eth.png" alt="eth" width="20" height="20" />
			</div>
			<p class={style.buttonTextContainer}>Etherum</p>
			<div class={style.buttonIconContainer}>
				<MdKeyboardArrowDown />
			</div>
		</div>
		<button
			id="dropdownButton"
			data-dropdown-toggle="dropdown"
			type="button"
			class={`${style.button} ${style.buttonPadding} border-[1px] border-[#000000] hover:border-[#CED0D9]`}
		>
			<div class={`${style.buttonIconContainer} mx-2 w-1 `}>
				<GoKebabHorizontal />
			</div>
		</button>
	</div>

	<!-- svelte-ignore a11y-invalid-attribute -->
	<div
		id="dropdown"
		class="hidden z-10 w-44 text-base list-none bg-[#212429] rounded divide-y divide-gray-100 shadow border border-transparent"
	>
		<ul class="py-1" aria-labelledby="dropdownButton">
			<li class={``}>
				<a href="#" class="block py-2 px-4  text-[#C3C5CB] hover:text-white ">
					<div>About</div>
				</a>
			</li>
			<li class={``}>
				<a href="#" class="block py-2 px-4  text-[#C3C5CB] hover:text-white ">
					<div>Help Center</div>
				</a>
			</li>
			<li class={``}>
				<a href="#" class="block py-2 px-4  text-[#C3C5CB] hover:text-white ">
					<div>Request Features</div>
				</a>
			</li>
			<li class={``}>
				<a href="#" class="block py-2 px-4  text-[#C3C5CB] hover:text-white ">
					<div>Discord</div>
				</a>
			</li>
			<li class={``}>
				<a href="#" class="block py-2 px-4  text-[#C3C5CB] hover:text-white ">
					<div>Docs</div>
				</a>
			</li>
		</ul>
	</div>
</div>

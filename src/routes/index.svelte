<script>
	import IoIosSettings from 'svelte-icons/io/IoIosSettings.svelte';
	import IoMdArrowDown from 'svelte-icons/io/IoMdArrowDown.svelte';
	import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte';
	import GiCog from 'svelte-icons/gi/GiCog.svelte';
	import Toggle from 'svelte-toggle';
	import OutClick from 'svelte-outclick';

	let autoRouterToggle = true;

	let incomingAmount = '';
	let outgoingAmount = '';

	let settings = false;

	const style = {
		wrapper: `w-screen flex items-center justify-center mt-14 text-white`,
		content: `bg-[#000000] w-auto sm:w-[30rem] rounded-2xl px-2 pt-4  shadow-lg`,
		formHeader: `px-1 flex items-center justify-between font-semibold text-[1rem]`,
		transferPropContainer: `bg-[#212429] my-2 rounded-2xl px-2 py-4 text-xl border border-transparent hover:border-[#CED0D9]  flex items-center justify-between`,
		transferPropInput: `bg-transparent p-1 placeholder:text-[#B2B9D2] font-sans1 border-transparent focus:border-transparent focus:ring-0 mb-3 w-full text-3xl `,
		currencySelector: `flex w-1/4`,
		currencySelectorOutgoing: `flex w-1/4 `,
		currencySelectorContent: `w-full h-min flex justify-between items-center shadow-lg bg-[#2F2F36] hover:bg-[#40444F] rounded-full text-lg font-medium cursor-pointer p-2 mt-[-0.2rem]`,
		currencySelectorContentOutgoing: `w-full h-min flex justify-between items-center shadow-lg bg-[#2F2F36] hover:bg-[#40444F] rounded-full text-lg font-medium cursor-pointer p-2 mt-[-0.2rem]`,
		// currencySelectorContentOutgoing: `w-full h-min flex justify-between items-center shadow-lg text-white bg-[#E8006F] hover:bg-[#CF0063] rounded-2xl text-lg font-medium cursor-pointer p-2 mt-[-0.2rem]`,
		currencySelectorIcon: `flex items-center w-96`,
		currencySelectorTicker: `ml-2 mx-1`,
		currencySelectorArrow: `text-lg`,
		currencySelectorArrowOutgoing: `text-lg w-6`,
		confirmButton: `bg-[#16273C] my-2 rounded-2xl text-[#5090EA] hover:bg-[#133662] py-3 px-8 text-base font-semibold flex items-center justify-center cursor-pointer`,
		icon: `w-6`,
		settingButton: `my-2 w-min shadow-lg bg-[#2172E5] rounded-full text-sm text-white font-medium cursor-pointer p-2 mt-[-0.2rem]`,
		settingInput: `bg-transparent px-3 py-1 font-sans1 border-transparent focus:border-transparent rounded-full focus:ring-0 w-full text-sm `
	};

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			transform: 'translate(-50%, -50%)',
			backgroundColor: '#0a0b0d',
			padding: 0,
			border: 'none'
		},
		overlay: {
			backgroundColor: 'rgba(10, 11, 13, 0.75)'
		}
	};

	const handleOutsideClisk = () => {
		settings = false;
	};
</script>

<OutClick
	class="content content--component"
	on:outclick={handleOutsideClisk}
	excludeByQuerySelector={['.js-button']}
/>
<div class={`${style.wrapper} content content--excluded js-button`}>
	<div class={style.content}>
		<div class={style.formHeader}>
			<div>Swap</div>
			<!-- <div class={style.icon}></div> -->
			<button
				id="dropdownButton"
				on:click={() => (settings = !settings)}
				type="button"
				class={`${style.icon} `}
				><GiCog />
			</button>
		</div>
		<div class={style.transferPropContainer}>
			<textarea cols="30" rows="2" class={style.transferPropInput} />
		</div>
		<div class={style.transferPropContainer}>
			<div class={`flex flex-col`}>
				<input
					type="text"
					class={style.transferPropInput}
					placeholder="0.0"
					pattern="^[0-9]*[.,]?[0-9]*$"
					bind:value={incomingAmount}
				/>
				<div class={`px-2 text-[#8F96AC] text-sm`}>
					{#if !isNaN(incomingAmount) && incomingAmount > 0}
						{`$${incomingAmount * 2500}`}
					{/if}
				</div>
			</div>
			<div class={style.currencySelector}>
				<div class={style.currencySelectorContent}>
					<div class={style.currencySelectorIcon}>
						<img src="/logos/eth.png" alt="eth" />
					</div>
					<div class={style.currencySelectorTicker}>ETH</div>
					<div class={style.currencySelectorArrow}>
						<IoIosArrowDown />
					</div>
				</div>
			</div>
		</div>
		<div class={style.transferPropContainer}>
			<input
				type="text"
				class={style.transferPropInput}
				placeholder="0.0"
				pattern="^[0-9]*[.,]?[0-9]*$"
				bind:value={outgoingAmount}
			/>
			<!-- <div class={style.currencySelectorOutgoing}>
				<div class={style.currencySelectorContentOutgoing}>
					<div class={style.currencySelectorTicker}>Select a token</div>
					<div class={style.currencySelectorArrowOutgoing}>
						<IoIosArrowDown />
					</div>
				</div>
			</div> -->
			<div class={style.currencySelectorOutgoing}>
				<div class={style.currencySelectorContentOutgoing}>
					<div class={style.currencySelectorIcon}>
						<img src="/logos/usdt.png" alt="usdt" />
					</div>
					<div class={style.currencySelectorTicker}>USDT</div>
					<div class={style.currencySelectorArrow}>
						<IoIosArrowDown />
					</div>
				</div>
			</div>
		</div>
		<div class={style.confirmButton}>Connect Wallet</div>
	</div>

	<!-- svelte-ignore a11y-invalid-attribute -->
	{#if settings}
		<div
			id="dropdownSettings"
			class="z-10 w-1/3 text-sm absolute right-[290px] text-[#C3C5CB]  px-2 py-2 list-none bg-[#2C2F36] rounded-xl shadow border-[1px] border-[#40444F]"
		>
			<div class={`font-semibold py-2`}>Transaction Settings</div>

			<ul class="py-1" aria-labelledby="dropdownButton">
				<li>
					<p>Slippage Tolerance ?</p>
					<div class={`flex items-center justify-between`}>
						<div class={`${style.settingButton} mt-2`}>
							<div class={`mx-1`}>Auto</div>
						</div>
						<div class={`rounded-full  cursor-pointer mx-2 py-1 bg-[#212429]`}>
							<input type="text" class={style.settingInput} pattern="^[0-9]*[.,]?[0-9]*$" />
						</div>
					</div>
				</li>
				<li>
					<p>Transaction Deadline ?</p>
					<div class={`flex items-center`}>
						<div class={`rounded-full w-1/4 cursor-pointer my-2 py-1 bg-[#212429]`}>
							<input
								type="text"
								class={`${style.settingInput} text-right`}
								placeholder="30"
								pattern="^[0-9]*[.,]?[0-9]*$"
							/>
						</div>
						<div class="px-1">minutes</div>
					</div>
				</li>
				<li class={`py-1`}>
					<div class={`font-semibold py-1`}>Interface Settings</div>
					<div class={`text-sm flex items-center justify-between`}>
						<p>AutoRouter API ?</p>
						<Toggle
							label=""
							switchColor="#FFF"
							toggledColor="#2172E5"
							untoggledColor="#191B1F"
							on="On"
							off="Off"
							bind:toggle={autoRouterToggle}
						/>
					</div>
				</li>
				<li class={`py-1`}>
					<div class={`text-sm flex items-center justify-between`}>
						<p>Expert Mode API ?</p>
						<Toggle
							label=""
							switchColor="#FFF"
							toggledColor="#2172E5"
							untoggledColor="#191B1F"
							on="On"
							off="Off"
							bind:toggle={autoRouterToggle}
						/>
					</div>
				</li>
			</ul>
		</div>
	{/if}
</div>

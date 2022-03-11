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
		wrapper: `w-screen flex items-center justify-center mt-14 text-white px-4 md:px-0`,
		content: `relative bg-[#191B1F] w-full sm:!w-[35rem] rounded-2xl px-2 pt-4 shadow-lg`,
		formHeader: `px-2 py-1 flex items-center justify-between font-semibold text-[1rem]`,
		transferPropContainer: `bg-[#212429] my-2 rounded-3xl px-2 py-4 text-xl border border-transparent hover:border-[#CED0D9]  flex items-center justify-between`,
		transferPropInput: `bg-transparent p-1 placeholder:text-[#B2B9D2] font-sans1 border-transparent focus:border-transparent focus:ring-0 mb-3 w-full text-3xl `,
		currencySelector: `flex w-1/4`,
		currencySelectorOutgoing: `flex w-1/4 `,
		currencySelectorContent: `w-full h-min flex justify-between items-center shadow-lg bg-[#2F2F36] hover:bg-[#40444F] rounded-3xl text-lg font-medium cursor-pointer px-2 py-[0.1rem] mt-[-0.2rem]`,
		currencySelectorContentOutgoing: `w-full h-min flex justify-between items-center shadow-lg bg-[#2F2F36] hover:bg-[#40444F] rounded-3xl text-lg font-medium cursor-pointer px-2 py-[0.1rem] mt-[-0.2rem]`,
		// currencySelectorContentOutgoing: `w-full h-min flex justify-between items-center shadow-lg text-white bg-[#E8006F] hover:bg-[#CF0063] rounded-2xl text-lg font-medium cursor-pointer p-2 mt-[-0.2rem]`,
		currencySelectorIcon: `flex items-center w-72 h-12`,
		currencySelectorTicker: `ml-2 mx-1`,
		currencySelectorArrow: `px-1 text-sm`,
		currencySelectorArrowOutgoing: `text-lg w-6`,
		confirmButton: `bg-[#153D6F]/[.44] my-2 rounded-2xl text-[#5090EA] hover:bg-[#133662]/[.44] py-4 px-8 text-normal font-semibold flex items-center justify-center cursor-pointer`,
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
			>
				<!-- <GiCog /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="Settings__StyledMenuIcon-sc-fxnuer-0 iAihK"
					><circle cx="12" cy="12" r="3" /><path
						d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
					/></svg
				>
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
						<img src="/logos/eth.png" alt="eth" width="30" height="30" />
					</div>
					<div class={style.currencySelectorTicker}>ETH</div>
					<div class={style.currencySelectorArrow}>
						<!-- <IoIosArrowDown /> -->
						<svg
							width="20"
							height="10"
							viewBox="0 0 12 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="CurrencyInputPanel__StyledDropDown-sc-db1zdq-8 HBfqJ"
						>
							<path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE" />
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div class={style.transferPropContainer}>
			<div class={`flex flex-col`}>
				<input
					type="text"
					class={style.transferPropInput}
					placeholder="0.0"
					pattern="^[0-9]*[.,]?[0-9]*$"
					bind:value={outgoingAmount}
				/>
				<div class={`px-2 text-[#8F96AC] text-sm`}>
					{#if !isNaN(outgoingAmount) && outgoingAmount > 0}
						{`$${incomingAmount * 2500}`}
					{/if}
				</div>
			</div>
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
						<svg
							width="20"
							height="10"
							viewBox="0 0 12 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="CurrencyInputPanel__StyledDropDown-sc-db1zdq-8 HBfqJ"
						>
							<path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE" />
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div class={style.confirmButton}>Connect Wallet</div>
		<!-- svelte-ignore a11y-invalid-attribute -->
		{#if settings}
			<div
				id="dropdownSettings"
				class="z-10 w-[18rem] text-sm absolute top-[2.5rem] right-[1rem] text-[#C3C5CB] modal-settings px-2 py-2 list-none bg-[#2C2F36] rounded-xl shadow border-[1px] border-[#40444F]"
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
</div>

<style>
	/* .modal-settings {
		position: absolute;
		inset: 0px 0px auto auto;
		margin: 0px;
		transform: translate(-24.1215px, 68.8889px);
	} */
</style>

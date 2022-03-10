<script>
	import IoIosSettings from 'svelte-icons/io/IoIosSettings.svelte';
	import IoMdArrowDown from 'svelte-icons/io/IoMdArrowDown.svelte';
	import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte';

	let incomingAmount = '';
	let outgoingAmount = '';

	const style = {
		wrapper: `w-screen flex items-center justify-center mt-14`,
		content: `bg-[#FFFFFF] w-auto sm:w-[30rem] rounded-2xl px-2 pt-4  shadow-lg`,
		formHeader: `px-1 flex items-center justify-between font-semibold text-[1rem]`,
		transferPropContainer: `bg-[#F7F8FA] my-2 rounded-2xl p-4 text-xl border hover:border-[#CED0D9]  flex items-center justify-between`,
		transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] font-sans1 border-transparent focus:border-transparent focus:ring-0 mb-3 w-full text-3xl `,
		currencySelector: `flex w-1/4 `,
		currencySelectorOutgoing: `flex w-3/4 `,
		currencySelectorContent: `w-full h-min flex justify-between items-center shadow-lg bg-[#EDEEF2] hover:bg-[#CED0D9] rounded-2xl text-lg font-medium cursor-pointer p-2 mt-[-0.2rem]`,
		currencySelectorContentOutgoing: `w-full h-min flex justify-between items-center shadow-lg text-white bg-[#E8006F] hover:bg-[#CF0063] rounded-2xl text-lg font-medium cursor-pointer p-2 mt-[-0.2rem]`,
		currencySelectorIcon: `flex items-center w-96`,
		currencySelectorTicker: `mx-1`,
		currencySelectorArrow: `text-lg`,
		currencySelectorArrowOutgoing: `text-lg w-6`,
		confirmButton: `bg-[#FCDCE8] my-2 rounded-2xl text-[#D50066] py-3 px-8 text-base font-semibold flex items-center justify-center cursor-pointer`,
		icon: `w-6`
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
</script>

<div class={style.wrapper}>
	<div class={style.content}>
		<div class={style.formHeader}>
			<div>Swap</div>
			<div class={style.icon}><IoIosSettings /></div>
		</div>
		<div class={style.transferPropContainer}>
			<input
				type="text"
				class={style.transferPropInput}
				placeholder="0.0"
				pattern="^[0-9]*[.,]?[0-9]*$"
				bind:value={incomingAmount}
			/>
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
			<div class={style.currencySelectorOutgoing}>
				<div class={style.currencySelectorContentOutgoing}>
					<div class={style.currencySelectorTicker}>Select a token</div>
					<div class={style.currencySelectorArrowOutgoing}>
						<IoIosArrowDown />
					</div>
				</div>
			</div>
		</div>
		<div class={style.confirmButton}>Connect Wallet</div>
	</div>
</div>

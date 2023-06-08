<script lang="ts">
	import clsx from 'clsx'

	let button: HTMLButtonElement | HTMLAnchorElement;

	export const getElement = () => button
	
	$: className = clsx('inline-flex justify-center w-full h-full items-center text-white bg-primary-500 hover:bg-primary-500 shadow-sm hover:shadow-md leading-none px-2 py-1.5 max-h-12 text-xs rounded hover:bg-opacity-80 transition duration-300 uppercase', $$props.class)
</script>

{#if $$props.href}
	<a
		{...$$restProps}
		href={$$props.href}
		bind:this={button}
		class={className}
		class:disabled={$$props.disabled}
		on:click
	>
		<slot />
	</a>
{:else}
	<button
		{...$$restProps}
		bind:this={button}
		class={className}
		on:click
	>
		<slot />
	</button>
{/if}
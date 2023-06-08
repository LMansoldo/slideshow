<script lang="ts">
    import clsx from "clsx"

	export let value: string = ''
	export let label: string = ''
	export let type: string = 'text'

    $: className = clsx('border-additional-300 px-3 py-3 rounded text-base w-full border h-full border-solid hover:border-primary-500 focus:border-primary-500 active:border-primary-500 focus:outline-none transition-colors duration-300 placeholder:text-additional-400', $$props.class)
	
    function handleChange(event: Event) {
		const target = event.target as HTMLInputElement
		value = target.value
	}
</script>

<label>
	{label}
	<input
		class={className}
		type={type}
		{value}
		on:input={handleChange}
	/>
</label>

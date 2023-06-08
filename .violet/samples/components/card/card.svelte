<div class="relative w-full border border-solid border-additional-300 shadow-sm ">
	<div class="card float-left w-full">
		<slot />
	</div>
	{#if $$slots.addon}
		<div class="addon absolute float-right"><slot name="addon" /></div>
	{/if}
</div>

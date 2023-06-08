<script lang="ts">
	import { Button } from '../button';
	export let showModal: boolean = false;
</script>

{#if showModal}
	<div class="flex flex-row justify-center bg-slate-100 w-5/6 h-5/6 absolute top-20 left-auto p-4 border-solid border-primary-100 border-[1px] rounded-sm">
		<Button>previous</Button>
		<slot />
		<Button>next</Button>
	</div>
{/if}

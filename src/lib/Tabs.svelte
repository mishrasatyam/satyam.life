<script>
    import Skills from '$lib/Skills.svelte';
    import Experience from '$lib/Experience.svelte';
    let tabs = [{'name':'Skills',component:Skills},{name:'Experience',component:Experience}]
    let current_tab = tabs[0]

    function handleClick(el){
        if(el.name==current_tab.name){
            return
        }
        current_tab = el
    }
</script>
<div class="bg-slate-300 mt-3 p-2 flex gap-3 rounded-lg shadow-lg shadow-red-300">
    {#each tabs as el}
        <h3 class="p-2 {current_tab.name==el.name?'text-black':'text-blue-500 cursor-pointer'}" on:click={()=>handleClick(el)}>{el.name}</h3>
    {/each}    
</div>
<div>
    <svelte:component this={current_tab.component}/>
</div>
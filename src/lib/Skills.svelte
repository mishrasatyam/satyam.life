<script>
    import skills from '$lib/db/skills.json'
    
</script>
<div class="bg-purple-700 text-white mt-5 p-5 shadow-lg rounded-lg " >
    <div class="m-2 grid grid-cols-3 gap-3">      
        {#each Object.entries(skills) as [key,val]}
        <div class="">
            <header class="font-bold text-xl">{key}</header>
            <ol class="m-3 text-{0.75}" >
                {#each val as el}
                        <li  class="list-disc">{el}</li>
                {/each}
            </ol>
            
        </div>
        {/each}
    </div> 
</div>
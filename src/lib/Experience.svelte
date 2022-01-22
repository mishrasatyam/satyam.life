<script>
    import experience from '$lib/db/experience.json'

</script>
<div class="bg-purple-700 text-white mt-5 p-2 sm:p-5 shadow-lg rounded-lg " >
    <div class="m-2 ">      
        {#each experience as el}
        <div class="mt-4">
            <header class="font-medium text-xl">{el.company}, <span class="font-bold italic underline">{el.post}</span></header>
            <span class="text-xs">{el.city} , </span>
            <span class="text-xs">{el.range}</span>
            <p class="shadow-lg p-4 bg-purple-400 rounded-lg">
                {#each el.points as point}
                    <span class="block">{point}</span>
                    <br/>
                {/each}
            </p>
        </div>
        {/each}
    </div> 
</div>
<script>
    import experience from '$lib/db/experience.json'
    import {scale,fly} from 'svelte/transition'
</script>
<div class="bg-purple-700 text-white mt-5 p-2 sm:p-5 shadow-lg rounded-lg " >
    <div class="m-2 ">      
        {#each experience as el}
        <div class="mt-4">
            <header class="font-medium text-xl" in:scale={{delay:0}}>{el.company}, <span class="font-bold italic underline">{el.post}</span></header>
            <span class="text-xs" in:fly={{delay:100,x:-20,y:-20}}>{el.city} , </span>
            <span class="text-xs" in:scale={{delay:200}}>{el.range}</span>
            <p class="shadow-lg p-4 bg-purple-500 rounded-lg" >
                {#each el.points as point}
                    <span class="block shadow-sm bg-purple-400 p-2 rounded-sm" in:fly={{delay:210,x:-40}}>{point}</span>
                    <br/>
                {/each}
            </p>
        </div>
        {/each}
    </div> 
</div>
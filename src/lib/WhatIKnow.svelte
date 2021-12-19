<script>
    let skills = {'Frontend' : ['Svelte','Svelte kit','HTML','CSS','Javascript'], 'Backend':['Fastify','Node js','Mongodb'],'Cloud':['AWS','Azure']}
</script>
<div class="bg-purple-700 text-white mt-5 p-5 shadow-lg rounded-lg ">
    <span class="font-semibold text-2xl">What I Know :</span>
    <div class="m-3 grid grid-cols-3 gap-3">
                
        {#each Object.entries(skills) as [key,val]}
        <div class="">
            <header class="font-bold text-xl">{key}</header>
            <ol class="m-3 text-{0.75}">
                {#each val as el}
                    {#key el}
                        <li class="list-disc">{el}</li>
                    {/key}
                {/each}
            </ol>
        </div>
        {/each}
    </div> 
</div>
<script>
    import {Email,Github,Linkedin,Twitter,Pencil} from '$lib/icons/index'
    let digital_contacts = [{link:'satyam.mishra975@gmail.com',icon_element:Email,about:'Email'},
    {link:'https://github.com/mishrasatyam',icon_element: Github,about:'Github'},
    {link:'https://twitter.com/befocusedj',icon_element: Twitter, about:'Twitter'},
    {link:'https://www.linkedin.com/in/satyam-mishra-78aa9a122',icon_element: Linkedin,about:'Linkedin'},
    {link:'https://blog.satyam.life',icon_element: Pencil,about:'Blog'}
    ]
</script>
<div class=" text-white mt-5 p-5 rounded-lg shadow-lg bg-fuchsia-700">
    <div class="m-3">
        <div class="flex mt-3 space-x-5">
            {#each digital_contacts as el}
                <a rel="noreferrer" class="animate-delay-200 animated animate-zoom-in" href="{!el.link.startsWith('https')?'mailto:':''}{el.link}" target="_blank">
                <i title="{el.about}">
                    <svelte:component this={el.icon_element} color="#00bfff" size="2.5rem"/>
                </i>
                </a>
            {/each}
        </div>
    </div> 
</div>
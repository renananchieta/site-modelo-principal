<template>
<footer id="footer">
        <div class="footer-content">
            <!-- <img src="/spotify/img/logo.png" alt="" class="logo"> -->
            <ul class="footer-menu">
                <p>Empresa</p>
                <li class="footer-menu-item">Sobre</li>
                <li class="footer-menu-item">Empregos</li>
                <li class="footer-menu-item">For the record</li>
            </ul>

            <ul class="footer-menu">
                <p>Comunidades</p>
                <li class="footer-menu-item">Para Artistas</li>
                <li class="footer-menu-item">Desenvolvedores</li>
                <li class="footer-menu-item">Marcas</li>
                <li class="footer-menu-item">Investidores</li>
                <li class="footer-menu-item">Fornecedores</li>
            </ul>

            <ul class="footer-menu">
                <p>Link úteis</p>
                <li class="footer-menu-item">Ajuda</li>
                <li class="footer-menu-item">Player da Web</li>
                <li class="footer-menu-item">App móvel grátis</li>
            </ul>

            <div class="socials">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>                
            </div>
        </div>
        <div class="footer-info">
            <ul class="footer-info-items">
                <li class="footer-info-item">Legal</li>
                <li class="footer-info-item">Centro de Privacidade</li>
                <li class="footer-info-item">Política de Privacidade</li>
                <li class="footer-info-item">Coockies</li>
                <li class="footer-info-item">Sobre Anúncios</li>
            </ul>
            <div class="rights">
                <div class="country">
                    <p>Brasil</p>
                    <img src="@/assets/brazil.png" alt="" class="brazil-flag">
                </div>
                <p>&copy; 2024 - Renan Anchieta</p>
            </div>
        </div>

    </footer>
</template>

<script setup>
//
</script>

<style scoped>
/* Footer */
#footer {
    background: black;
    color: white;
    padding: 80px 0;
}

#footer .footer-content {
    display: flex;
    width: 60%;
    margin: auto;
    justify-content: space-between;
}

#footer .footer-content .footer-menu {
    margin: 0 40px;
    list-style: none;
}

#footer .footer-content .footer-menu p{
    font-weight: bold;
    text-transform: uppercase;
    color: #919495;
    font-size: 0.8rem;
}

#footer .footer-content .footer-menu .footer-menu-item {
    margin: 25px 0;
    transform: all 300ms ease;
}

#footer .footer-content .footer-menu .footer-menu-item:hover {
    cursor: pointer;
    color: var(--default-green);
}


/* Footer Socials */
.socials {
    display: flex;
}

.socials i {
    margin: 0 20px;
    font-size: 1.7rem;
    transition: all 300ms ease;
}

.socials i:hover { 
    color: var(--default-green);
    cursor: pointer;
}

/* Footer Info */
.footer-info{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 60%;
    margin: auto;
    font-weight: bold;
    color: #919496;
    font-size: 0.75rem;
    padding-top: 50px;
}

.footer-info .footer-info-items {
    display: flex;
    list-style: none;
}

.footer-info .footer-info-items .footer-info-item{
    margin: 0 10px;
    transition: all 300ms ease;
}

.footer-info .footer-info-items .footer-info-item:hover{
    color: var(--default-green);
    cursor: pointer;
}


.footer-info .rights .country {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
}

.footer-info .rights .country p{
    transition: all 300ms ease;
}

.footer-info .rights .country p:hover{
    color: var(--default-green);
    cursor: pointer;
}

.footer-info .rights .country .brazil-flag{
    height: 20px;
    width: auto;
    display: inline-block;
    margin-left: 10px;
}
</style>
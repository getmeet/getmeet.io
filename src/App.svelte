<script>
	export let name;
	import { isAuthenticated } from './helpers/utils';
	import {googleOauth} from './config';

	const handleSignInClick = () => {
	    let url = `https://accounts.google.com/o/oauth2/auth?scope=email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar&response_type=code&access_type=offline&redirect_uri=${googleOauth.redirect_uri}&client_id=${googleOauth.client_id}`;
	    window.open(url, "_self");
	  };
</script>

<main class="page-container">
	<div class="app-content login-page">
		<div class="page-container">
			<div class="login-page-header">
				<div class="login-page-header__meet-logo"><img src="./images/getmeet_logo.png" alt="getmeet"></div>
				<div><button class="btn btn-login-google" on:click={handleSignInClick}><img class="btn-login-google__icon" src="./images/google-icon-svg.svg" alt=""><span class="btn-login-google__text">Log in with Google</span></button></div>
			</div>
			<div class="container">
				<div class="d-flex">
					<div class="col-md-6">
						<h1 class="hero-tag">Let's make online meets more open and organized</h1>
						<div class="mt-5"><button class="btn btn-login-google" on:click={handleSignInClick}><img class="btn-login-google__icon" src="./images/google-icon-svg.svg" alt=""><span class="btn-login-google__text">Log in with Google</span></button></div>
					</div>
					<div class="col-md-6"><img src="./images/getmeet-hero.png" class="img-fluid" alt=""></div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.d-flex {
		display: flex;
	}
	.img-fluid {
    max-width: 100%;
    height: auto;
}
.hero-tag {
    font-size: 63px;
    font-weight: 600;
    color: #111;
}
	.app-body {
		background-color: #f5f7fa;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: row;
		min-height: 100vh;
	}

	.login-page-header {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
	}

	.login-page-header__meet-logo {
		margin: 40px 0 80px;
	}
	.login-page-header__meet-logo img {
	    height: 100%;
	    width: 160px;
	}
	.btn {
		display: inline-block;
		font-weight: 400;
		color: #212529;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 0.375rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.5;
		border-radius: 0.25rem;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}

	.btn-login-google {
		background: #fff;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24);
		color: #757575;
		font-family: 'Roboto';
		font-weight: 500;
		padding: 8px;
		border-radius: 2px;
	}

	.btn-login-google__icon {
	    height: 20px;
	    vertical-align: middle;
	    width: auto;
	}
	.btn-login-google__text {
    padding: 0 16px;
    vertical-align: middle;
}
.container {
    width: 1184px;
    max-width: 100%;
}
	.page-container {
		max-width: 1240px;
		width: 100%;
		padding: 0 60px;
		margin: 16px auto 0;
	}

	.app-content {
		display: block;
		-webkit-box-flex: 1;
		flex-grow: 1;
		width: 100%;
		padding: 0;
	}

	.app-header {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		-webkit-box-align: center;
		align-items: center;
		margin: 0;
		padding: 28px 0 15px;
	}

	.app-header__title {
		font-size: 26px;
	}
</style>

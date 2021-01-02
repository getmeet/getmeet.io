<script>
	export let name;
	import {
		isAuthenticated
	} from './helpers/utils';

	console.log(isAuthenticated())
</script>

<main class="page-container">
	<div class="app-content login-page">
		<div class="page-container">
			<div class="login-page-header">
				<div class="login-page-header__meet-logo"><img src="./images/getmeet_logo.png" alt="getmeet"></div>
				<div><button class="btn btn-login-google"><img class="btn-login-google__icon" src="./images/google-icon-svg.svg" alt=""><span class="btn-login-google__text">Log in with Google</span></button></div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h1 class="hero-tag">Let's make online meets more open and organized</h1>
						<div class="mt-5"><button class="btn btn-login-google"><img class="btn-login-google__icon" src="./images/google-icon-svg.svg" alt=""><span class="btn-login-google__text">Log in with Google</span></button></div>
					</div>
					<div class="col-md-6"><img src="./images/getmeet-hero.png" class="img-fluid" alt=""></div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.app-body {
		background-color: #f5f7fa;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: row;
		min-height: 100vh;
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

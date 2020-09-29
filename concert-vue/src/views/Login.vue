<template>
	<div class="Connexion ">
		<main class="main h-100 w-100 " style="background-color: rgba(0,0,0,0.6); min-height:80vh;">
			<div class="container h-100 ">
				<div class="row h-100  p-3 ">
					<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100 ">
						<div class="d-table-cell align-middle">
								<div v-if="getLogin.message">
								<div class="alert alert-danger" role="alert">
							
										<p class="">{{getLogin.message}}</p>
								
								</div>
							</div>

							<div class="card w-75 m-auto ">
								<div class="text-center  text-uppercase mt-4">
									<h1 class="h2 turc">Hello</h1>
									<h1 class="text-uppercase">
										Welcome Back
									</h1>
								</div>
								<div class="card-body">
									<div class="m-sm-4">
										<div class="text-center">

										</div>
										<form @submit.prevent="login">
											<div class="form-group">
												<label class="text-uppercase ml-2">Email<span
														class="text-danger">*</span></label>
												<input class="form-control" type="email" name="email"
													placeholder="Enter your email" v-model="email" autocomplete="off">

											</div>
											<div class="form-group">
												<label class="text-uppercase ml-2">Mot de passe <span
														class="text-danger">*</span></label>
												<input class="form-control " type="password" name="password"
													placeholder="Enter your password" v-model="password">
												<small>
													<a href="pages-reset-password.html" class="text-light">
														Forget Password</a>
												</small>
											</div>
											<div>
												<div class="custom-control custom-checkbox align-items-center">
													<input id="customControlInline" type="checkbox"
														class="custom-control-input" value="remember-me"
														name="remember-me" checked="">
													<label class="custom-control-label text-small"
														for="customControlInline">Remember Password</label>
												</div>
											</div>
											<div class="text-center mt-3">
												<button type="submit" href="dashboard-default.html"
													class="btn btn-lg font-weight-bold pl-4 pr-4"
													style="background:-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%); color:white; border:0; border-radius:15px;">Connexion</button>
												<!-- <button type="submit" class="btn btn-lg btn-primary">Sign in</button> -->
											</div>
										</form>
								
												<p type="submit" class="text-white text-center mt-2 bleu-bg">Don't have an account? <span ><router-link to="/register" class="turc"> Sign up now	</router-link></span>
</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	// @ is an alias to /src

	import {
		mapActions,
		mapGetters
	} from 'vuex'

	export default {
		name: 'Login',

		data() {
			return {
				email: '',
				password: '',
			}
		},
		methods: {
			...mapActions(['loginForm']),
			login() {

				var obj = {

					'email': this.email,
					'password': this.password
				}
				this.loginForm(obj);


			}
		},
		computed: mapGetters(['getLogin'])
	}
</script>
<style scoped>
	.Connexion {
		height: 100vh;


		background: url(/images/bg_login5.jpg);

	}


	.card {
		background-color: rgba(10, 30, 94, 0.8);
		-webkit-box-shadow: 10px 10px 43px 16px rgba(7, 17, 48, 1);
		-moz-box-shadow: 10px 10px 43px 16px rgba(7, 17, 48, 1);
		box-shadow: 10px 10px 43px 16px rgba(7, 17, 48, 1);
	}

	a {
		text-decoration: none;
	}

	input {
		background: none;
		border: 0;
	}
</style>
<template>
	<div class="Register">
		<main class="main h-100 w-100 " style="background-color: rgba(0,0,0,0.6); min-height:80vh;">
			<div class="container h-100">
				<div class="row h-100">
					<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
						<div class="d-table-cell align-middle">
							<div v-if="getRegister.message != null">
								<div class="alert alert-danger" role="alert">
									<div v-for="message in getRegister.message" :key="message._id">
										<p class="">{{message}}</p>
									</div>
									<i @click="getRegister.message = null" class="fas fa-times" style="color:red;"></i>
								</div>
							</div>
							<div class="card w-75 m-auto">
								<div class="text-center  text-uppercase mt-4">
									<h1 class="h2 turc">Hello</h1>
									<h1 class="text-uppercase">
										Welcome
									</h1>
								</div>

								<div class="card-body">
									<div class="m-sm-4">
										<div class="text-center">

										</div>
										<form @submit.prevent="registerUser">

											<div class="form-group">
												<label class="text-uppercase ml-2">Firstname<span
														class="text-danger">*</span></label>
												<input class="form-control " type="text" name="firstname"
													placeholder="Entrer your firstname" v-model="firstname">
											</div>
											<div class="form-group">
												<label class="text-uppercase ml-2">Lastname<span
														class="text-danger">*</span></label>
												<input class="form-control " type="text" name="lastname"
													placeholder="Enter your lastname" v-model="lastname">
											</div>

											<div class="form-group">
												<label class="text-uppercase ml-2">Phone<span
														class="text-danger">*</span></label>
												<input class="form-control " type="text" name="phone"
													placeholder="Entrez enter your phone" v-model="phone">
											</div>

											<div class="form-group">
												<label class="text-uppercase ml-2">Email<span
														class="text-danger">*</span></label>
												<input class="form-control " type="email" name="email"
													placeholder="Enter your email" v-model="email">
											</div>
											<div class="form-group">
												<label class="text-uppercase ml-2">Password<span
														class="text-danger">*</span></label>
												<input class="form-control " type="password" name="password"
													placeholder="Entrez your password" v-model="password">
											</div>
											<div class="form-group">
												<label class="text-uppercase ml-2">Confirm password<span
														class="text-danger">*</span></label>
												<input class="form-control " type="password" name="password"
													placeholder="Confirm your password "
													v-model="password_confirmation">
											</div>
											<div class="text-center mt-3">
												<button type="submit" class="btn btn-lg font-weight-bold pl-4 pr-4"
													style="background:-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%); color:white; border:0; border-radius:15px;">Register</button>
												<p class="text-white mt-2 bleu-bg">Already have an account? <span>
														<router-link to="/login" class="turc"> Login </router-link>
													</span>
												</p>


											</div>
										</form>
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
		name: 'Register',

		data() {
			return {
				firstname: '',
				email: '',
				lastname: '',
				phone: '',
				password: '',
				password_confirmation: '',

			}
		},
		methods: {
			...mapActions(['register']),
			registerUser() {


				var obj = {

					'firstname': this.firstname,
					'email': this.email,
					'password': this.password,
					'password_confirmation': this.password_confirmation,
					'phone': this.phone,

					'lastname': this.lastname,

				}
				this.register(obj);



			}
		},
		computed: mapGetters(['getRegister']),
	}
</script>
<style scoped>
	.Register {
		height: 100vh;
		background: url(/images/bg_login.jpg) center;

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
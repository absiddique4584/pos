<template>

    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                </div>
                                <form class="user" @submit.prevent="signup">


                                    <div class="form-group">
                                        <label>Full Name</label>
                                        <input type="text" class="form-control" v-model="form.name" id="exampleInputFirstName" placeholder="Enter Your Full Name">
                                        <small class="text-danger" v-if="errors.name"> {{errors.name[0]}} </small>
                                    </div>


                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" v-model="form.email" id="exampleInputEmail" aria-describedby="emailHelp"
                                               placeholder="Enter Email Address">
                                        <small class="text-danger" v-if="errors.email"> {{errors.email[0]}} </small>
                                    </div>


                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" class="form-control" v-model="form.password" id="exampleInputPassword" placeholder="Password">
                                        <small class="text-danger" v-if="errors.password"> {{errors.password[0]}} </small>
                                    </div>


                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" class="form-control" v-model="form.password_confirmation" id="exampleInputPasswordRepeat"
                                               placeholder="Confirm Password">
                                        <small class="text-danger" v-if="errors.password_confirmation"> {{errors.password_confirmation[0]}} </small>
                                    </div>


                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block">Register</button>
                                    </div>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link class="font-weight-bold small" to="/">Already have an account?</router-link>
                                </div>
                                <div class="text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "register",
    created(){
        if (User.loggedIn()){
            this.$router.push({ name: 'home'})
        }
    },

    data(){
        return{
            form:{
                name: null,
                email: null,
                password: null,
                confirm_password: null,
            },
            errors:{}
        }
    },
    methods:{
        signup(){
            axios.post('/api/auth/signup',this.form)
                .then(res => {
                    User.responseAfterLogin(res)
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    this.$router.push({ name: 'home'})
                })
                .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <div>
    <div class="row">
        <router-link to="" class="btn btn-primary">All Employee</router-link>
    </div>

    <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                                </div>
                                <form class="user" @submit.prevent="employeeInsert" enctype="multipart/form-data">


                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" v-model="form.name"  placeholder="Enter Your Name">
                                                <small class="text-danger" v-if="errors.name"> {{errors.name[0]}} </small>
                                            </div>

                                            <div class="col-md-6">
                                                <input type="email" class="form-control" v-model="form.email"  aria-describedby="emailHelp" placeholder="md*****123@gmail.com">
                                                <small class="text-danger" v-if="errors.email"> {{errors.email[0]}} </small>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" v-model="form.address"  placeholder="Enter Your Address">
                                                <small class="text-danger" v-if="errors.address"> {{errors.address[0]}} </small>
                                            </div>

                                            <div class="col-md-6">
                                                <input type="text" class="form-control" v-model="form.phone"   placeholder="01*********">
                                                <small class="text-danger" v-if="errors.phone"> {{errors.phone[0]}} </small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" v-model="form.salary"  placeholder="Enter Your Salary">
                                                <small class="text-danger" v-if="errors.salary"> {{errors.salary[0]}} </small>
                                            </div>

                                            <div class="col-md-6">
                                                <input type="text" class="form-control" v-model="form.nid"  placeholder="Enter NID NO.">
                                                <small class="text-danger" v-if="errors.nid"> {{errors.nid[0]}} </small>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="date" class="form-control" v-model="form.joining_date"  placeholder="Enter Your Joining Date">
                                                <small class="text-danger" v-if="errors.joining_date"> {{errors.joining_date[0]}} </small>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="custom-file">
                                                    <input type="file"  class="custom-file-input" id="customFile">
                                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                                    <small class="text-danger" v-if="errors.photo"> {{errors.photo[0]}} </small>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <img src="form.photo" style="height: 40px; width: 40px;">
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block">Add Employee</button>
                                    </div>
                                </form>

                                <div class="text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "register",
    created(){
        if (!User.loggedIn()){
            this.$router.push({ name: '/'})
        }
    },

    data(){
        return{
            form:{
                name: null,
                email: null,
                address: null,
                phone: null,
                salary: null,
                photo: null,
                nid: null,
                joining_date: null,
            },
            errors:{}
        }
    },
    methods:{
        employeeInsert(){

        }
    }
}
</script>

<style scoped>

</style>

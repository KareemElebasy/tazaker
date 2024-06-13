<template>
  <div class="recruitmentForm bg-white flow-root">
    <general-breadcrumb :items="items" />
    <VeeForm as="div" @submit="onSubmit" :validation-schema="schema" ref="formRef">
      <form @click.stop class="pt-8">
        <div class="container shadow rounded-2xl py-10 mt-8">
          <p class="font-bold text-[22px] mb-7">{{ $t("titles.level") }}</p>
          <div class="grid grid-cols-1 gap-8" v-if="levelsOptions">
            <div
              class="grid xl:grid-cols-6 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 xl:m-0 m-auto gap-2 justify-between"
            >
              <div
                class="userLevel border rounded-xl max-w-[200px] space-y-3 p-3 pb-8"
                @click="experiencedFun()"
              >
                <label class="space-y-2 cursor-pointer">
                  <input
                    type="radio"
                    id="level1"
                    v-model="level"
                    value="experienced"
                    optionLabel="name"
                    name="level"
                    checked
                  />
                  <div class="w-[48px] h-[48px] m-auto">
                    <img src="@/assets/images/icons/emp.svg" alt="emp" class="m-auto" />
                  </div>
                  <p class="text-center font-medium">{{ levelsOptions[0]?.name }}</p>
                </label>
              </div>
              <div
                class="userLevel border rounded-xl max-w-[200px] space-y-3 p-3 pb-8"
                @click="fresh_graduateFun()"
              >
                <label class="space-y-2 cursor-pointer">
                  <input
                    type="radio"
                    id="level2"
                    v-model="level"
                    value="fresh_graduate"
                    name="level"
                  />
                  <div class="w-[48px] h-[48px] m-auto">
                    <img
                      src="@/assets/images/icons/graduate.svg"
                      alt="emp"
                      class="m-auto"
                    />
                  </div>
                  <p class="text-center font-medium">{{ levelsOptions[1]?.name }}</p>
                </label>
              </div>
              <div
                class="userLevel border rounded-xl max-w-[200px] space-y-3 p-3 pb-8"
                @click="cooperative_trainingFun()"
              >
                <label class="space-y-2 cursor-pointer">
                  <input
                    type="radio"
                    id="level3"
                    v-model="level"
                    value="cooperative_training"
                    name="level"
                  />
                  <div class="w-[48px] h-[48px] m-auto">
                    <img
                      src="@/assets/images/icons/healthicons_i-training-class.svg"
                      alt="emp"
                      class="m-auto"
                    />
                  </div>
                  <p class="text-center font-medium">{{ levelsOptions[2]?.name }}</p>
                </label>
              </div>
              <div
                class="userLevel border rounded-xl max-w-[200px] space-y-3 p-3 pb-8"
                @click="professional_technicianFun()"
              >
                <label class="space-y-2 cursor-pointer">
                  <input
                    type="radio"
                    id="level4"
                    v-model="level"
                    value="professional_technician"
                    name="level"
                  />
                  <div class="w-[48px] h-[48px] m-auto">
                    <img src="@/assets/images/icons/Frame.svg" alt="emp" class="m-auto" />
                  </div>
                  <p class="text-center font-medium">{{ levelsOptions[3]?.name }}</p>
                </label>
              </div>
              <div
                class="userLevel border rounded-xl max-w-[200px] space-y-3 p-3 pb-8"
                @click="hajj_season_employeesFun()"
              >
                <label class="space-y-2 cursor-pointer">
                  <input
                    type="radio"
                    id="level5"
                    v-model="level"
                    value="hajj_season_employees"
                    name="level"
                  />
                  <div class="w-[48px] h-[48px] m-auto">
                    <img
                      src="@/assets/images/icons/Frame2.svg"
                      alt="emp"
                      class="m-auto"
                    />
                  </div>
                  <p class="text-center font-medium">{{ levelsOptions[4]?.name }}</p>
                </label>
              </div>
              <div
                class="userLevel border rounded-xl max-w-[200px] space-y-3 p-3 pb-8"
                @click="security_officerFun()"
              >
                <label class="space-y-2 cursor-pointer">
                  <input
                    type="radio"
                    id="level6"
                    v-model="level"
                    value="security_officer"
                    name="level"
                  />
                  <div class="w-[48px] h-[48px] m-auto">
                    <img
                      src="@/assets/images/icons/healthicons_security-worker.svg"
                      alt="emp"
                      class="m-auto"
                    />
                  </div>
                  <p class="text-center font-medium">{{ levelsOptions[5]?.name }}</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="container shadow rounded-2xl py-10 mt-8">
          <p class="font-bold text-[22px] mb-7">{{ $t("titles.advancedData") }}</p>
          <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="first_name">{{ $t("titles.first_name") }}</label>
              <inputs-base
                id="first_name"
                name="first_name"
                type="text"
                :placeholder="$t('placeholder.first_name')"
              />
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="second_name">{{ $t("titles.second_name") }}</label>
              <inputs-base
                id="second_name"
                name="second_name"
                type="text"
                :placeholder="$t('placeholder.second_name')"
              />
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="last_name">{{ $t("titles.last_name") }}</label>
              <inputs-base
                id="last_name"
                name="last_name"
                type="text"
                :placeholder="$t('placeholder.last_name')"
              />
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="nationality">{{ $t("titles.nationality") }}</label>
              <inputs-select
                id="nationality"
                name="nationality"
                :options="nationalitiesOptions"
                v-model:modelValue="nationality"
                :placeholder="$t('placeholder.choose')"
              />
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="gender">{{ $t("titles.gender") }}</label>
              <inputs-select
                id="gender"
                name="gender"
                optionValue="name"
                dataKey="name"
                v-model:modelValue="gender"
                :options="genderOptions"
                :placeholder="$t('placeholder.choose')"
              />
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="email">{{ $t("titles.email") }}</label>
              <inputs-base
                id="email"
                name="email"
                type="email"
                :placeholder="$t('placeholder.email')"
              />
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="phoneNumber">{{ $t("titles.phone") }}</label>
              <div class="relative">
                <inputs-phone
                  @code_change="getPhoneCode($event, schema)"
                  :placeholder="$t('placeholder.phoneNumber')"
                />
              </div>
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="marital_status">{{ $t("titles.maritalStatus") }}</label>
              <inputs-select
                id="marital_status"
                name="marital_status"
                :options="marital_statusOptions"
                v-model:modelValue="marital"
                :placeholder="$t('placeholder.choose')"
              />
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="birthdate">{{ $t("titles.birthdate") }}</label>
              <inputs-base
                id="birthdate"
                name="birthdate"
                type="date"
                :placeholder="$t('placeholder.choose')"
              />
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="country">{{ $t("titles.city") }}</label>
              <inputs-select
                id="country"
                name="country"
                :options="countryOptions"
                v-model:modelValue="country"
                :placeholder="$t('placeholder.choose')"
              />
              <!-- @change="getCities($event, schema)"  -->
            </div>

            <!-- <div class="space-y-2"
              v-if="experienced == true || fresh_graduate == true || cooperative_training == true || professional_technician == true || hajj_season_employees == true || security_officer == true">
              <label for="city">{{ $t("titles.city") }}</label>
              <inputs-select id="city" name="city" :options="cityOptions" v-model:modelValue="city"
                :placeholder="$t('placeholder.choose')" @change="getDistincts($event, schema)" />
            </div> -->

            <!-- <div class="space-y-2"
              v-if="experienced == true || fresh_graduate == true || cooperative_training == true || professional_technician == true || hajj_season_employees == true || security_officer == true">
              <label for="area">{{ $t("titles.area") }}</label>
              <inputs-select id="area" name="area" v-model:modelValue="distincts" :options="distinctsOptions"
                :placeholder="$t('placeholder.choose')" />
            </div> -->

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="skills">{{ $t("titles.skills") }}</label>

              <inputs-base
                id="skills"
                name="skills"
                type="text"
                :placeholder="$t('placeholder.skills')"
              />

              <div v-if="addedSkillVal">
                <div v-for="(skill, index) in skills" :key="index">
                  <hr v-if="skills.length > 0" class="border border-[#EEE] my-6" />
                  <div class="grid grid-cols-1">
                    <div class="space-y-8">
                      <input
                        type="text"
                        v-model="skill.name"
                        class="border font-medium rounded-[30px] py-4 px-5 focus:outline-none focus:shadow-none focus:border-primary w-full"
                        :placeholder="$t('placeholder.skills')"
                      />

                      <div
                        class="cursor-pointer text-[#B00] font-bold flex text-[18px] gap-3"
                        @click="removeSkill(index)"
                        v-if="skills.length > 0"
                      >
                        {{ $t("titles.removeSkill") }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="text-primary font-bold flex text-[18px] gap-3 mt-6 cursor-pointer"
                @click="addSkill()"
              >
                <img src="@/assets/images/icons/plus.svg" alt="" class="my-auto" />
                {{ $t("titles.addSkill") }}
              </div>

              <!-- <inputs-multi-select v-model:modelValue="skills" id="skills" name="skills" :options="skillsOptions"
                optionLabel="title" :placeholder="$t('placeholder.choose')" /> -->
            </div>

            <div
              class="space-y-2"
              v-if="
                experienced == true ||
                fresh_graduate == true ||
                cooperative_training == true ||
                professional_technician == true ||
                hajj_season_employees == true ||
                security_officer == true
              "
            >
              <label for="languages">{{ $t("titles.languages") }}</label>
              <!-- <Dropdown v-model="languages" :options="languagesOptions" optionLabel="name"
              :placeholder="$t('placeholder.choose')" class="w-full min-h-[50px]" /> -->

              <inputs-multi-select
                v-model:modelValue="languages"
                id="languages"
                name="languages"
                :options="languagesOptions"
                optionValue="key"
                optionLabel="name"
                :placeholder="$t('placeholder.choose')"
              />
            </div>
            <div
              class="space-y-2"
              v-if="
                experienced == false &&
                fresh_graduate == false &&
                cooperative_training == false &&
                professional_technician == false &&
                hajj_season_employees == true &&
                security_officer == false
              "
            >
              <label for="desireLocation">{{ $t("titles.desireLocation") }}</label>
              <inputs-base
                id="desireLocation"
                name="desireLocation"
                type="text"
                :placeholder="$t('placeholder.desireLocation')"
              />
            </div>
          </div>
        </div>

        <!-- second -->
        <div
          class="container shadow rounded-2xl mt-8 py-10"
          v-if="
            experienced == true ||
            fresh_graduate == true ||
            cooperative_training == true ||
            professional_technician == true ||
            hajj_season_employees == true ||
            security_officer == true
          "
        >
          <p class="font-bold text-[22px] mb-7">{{ $t("titles.education") }}</p>
          <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
            <div class="space-y-2 mb-5">
              <label for="education">{{ $t("titles.bechalor") }}</label>
              <inputs-select
                id="education"
                name="education"
                :options="educationalLevelsOptions"
                v-model:modelValue="educational_levels"
                :placeholder="$t('placeholder.choose')"
              />
            </div>
            <div class="space-y-2 mb-5">
              <label for="educationCountry">{{ $t("titles.educationCountry") }}</label>
              <inputs-select
                id="educationCountry"
                name="educationCountry"
                :options="countryOptions"
                v-model:modelValue="educationCountry"
                :placeholder="$t('placeholder.choose')"
              />
            </div>
            <div class="space-y-2 mb-5">
              <label for="organization">{{ $t("titles.organization") }}</label>
              <inputs-base
                id="organization"
                name="organization"
                type="text"
                :placeholder="$t('placeholder.organization')"
              />

              <!-- <inputs-select id="organization" name="organization" :options="institutionNamesOptions"
                v-model:modelValue="organization" :placeholder="$t('placeholder.choose')" /> -->
            </div>
            <div class="space-y-2 mb-5">
              <label for="specialization">{{ $t("titles.specialization") }}</label>
              <inputs-base
                id="specialization"
                name="specialization"
                type="text"
                :placeholder="$t('placeholder.specialization')"
              />

              <!-- <inputs-select id="specialization" name="specialization" :options="specializationsOptions"
                v-model:modelValue="specialization" :placeholder="$t('placeholder.choose')" /> -->
            </div>
            <!-- <div class="space-y-2 mb-5">
              <label for="bachelor">{{ $t("titles.bachelor") }}</label>
              <inputs-select id="bachelor" name="bachelor" :options="degreesOptions" v-model:modelValue="bachelor"
                :placeholder="$t('placeholder.choose')" />
            </div> -->
            <div class="space-y-2 mb-5">
              <label for="gradutionYear">{{ $t("titles.gradutionYear") }}</label>
              <!-- <inputs-select id="gradutionYear" name="gradutionYear" :options="gradutionYearOptions"
                v-model:modelValue="gradutionYear" :placeholder="$t('placeholder.choose')" /> -->

              <inputs-calender
                id="gradutionYear"
                name="gradutionYear"
                :placeholder="$t('placeholder.choose')"
              />
            </div>
            <div
              class="space-y-2 mb-5"
              v-if="
                experienced == false &&
                fresh_graduate == true &&
                cooperative_training == false &&
                professional_technician == false &&
                hajj_season_employees == false &&
                security_officer == false
              "
            >
              <label for="expectedGradutionYear">{{
                $t("titles.expectedGradutionYear")
              }}</label>
              <!-- <inputs-select id="expectedGradutionYear" name="expectedGradutionYear" :options="gradutionYearOptions"
                v-model:modelValue="expectedGradutionYear" :placeholder="$t('placeholder.choose')" /> -->
              <inputs-calender
                id="expectedGradutionYear"
                name="expectedGradutionYear"
                :placeholder="$t('placeholder.choose')"
              />
            </div>
          </div>
        </div>

        <!-- third -->
        <div
          class="container shadow rounded-2xl py-10 mt-8"
          v-if="
            experienced == true ||
            fresh_graduate == true ||
            cooperative_training == false ||
            professional_technician == true ||
            hajj_season_employees == true ||
            security_officer == true
          "
        >
          <p class="font-bold text-[22px] mb-7">{{ $t("titles.experience") }}</p>

          <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
            <div class="space-y-2">
              <label for="company_name">{{ $t("titles.company_name") }}</label>
              <inputs-base
                id="company_name"
                name="company_name"
                type="text"
                :placeholder="$t('placeholder.companyName')"
              />
            </div>
            <div class="space-y-2">
              <label for="job_title">{{ $t("titles.job_title") }}</label>
              <inputs-base
                id="job_title"
                name="job_title"
                type="text"
                :placeholder="$t('placeholder.jobTitle')"
              />
            </div>
            <div class="space-y-2">
              <label for="from">{{ $t("titles.from") }}</label>
              <inputs-base
                id="from"
                name="from"
                type="date"
                :placeholder="$t('placeholder.choose')"
              />
            </div>
            <div class="space-y-2">
              <label for="to">{{ $t("titles.to") }}</label>
              <inputs-base
                id="to"
                name="to"
                type="date"
                :placeholder="$t('placeholder.choose')"
              />
            </div>
          </div>

          <div v-if="addedExperienceVal">
            <hr v-if="experiences.length > 0" class="border border-[#EEE] my-8 mt-12" />

            <div v-for="(experience, index) in experiences" :key="index">
              <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
                <div class="space-y-2">
                  <label for="company_name">{{ $t("titles.company_name") }}</label>
                  <input
                    type="text"
                    v-model="experience.company_name"
                    class="border font-medium rounded-[30px] py-4 px-5 focus:outline-none focus:shadow-none focus:border-primary w-full"
                    :placeholder="$t('placeholder.companyName')"
                  />
                </div>
                <div class="space-y-2">
                  <label for="job_title">{{ $t("titles.job_title") }}</label>
                  <input
                    type="text"
                    v-model="experience.job_title"
                    class="border font-medium rounded-[30px] py-4 px-5 focus:outline-none focus:shadow-none focus:border-primary w-full"
                    :placeholder="$t('placeholder.jobTitle')"
                  />
                </div>

                <div class="space-y-2">
                  <label for="from">{{ $t("titles.from") }}</label>
                  <input
                    type="date"
                    v-model="experience.from"
                    class="border font-medium rounded-[30px] py-4 px-5 focus:outline-none focus:shadow-none focus:border-primary w-full"
                    :placeholder="$t('placeholder.choose')"
                  />
                </div>
                <div class="space-y-2">
                  <label for="to">{{ $t("titles.to") }}</label>
                  <input
                    type="date"
                    v-model="experience.to"
                    class="border font-medium rounded-[30px] py-4 px-5 focus:outline-none focus:shadow-none focus:border-primary w-full"
                    :placeholder="$t('placeholder.choose')"
                  />
                </div>

                <div
                  class="cursor-pointer text-[#B00] font-bold flex text-[18px] gap-3 mt-6"
                  @click="removeExperience(index)"
                  v-if="experiences.length > 0"
                >
                  {{ $t("titles.removeExperience") }}
                </div>
              </div>
              <hr v-if="experiences.length > 1" class="border border-[#EEE] my-8 mt-12" />
            </div>
          </div>
          <div
            class="text-primary font-bold flex text-[18px] gap-3 mt-6 cursor-pointer"
            @click="addExperience()"
          >
            <img src="@/assets/images/icons/plus.svg" alt="" class="my-auto" />
            {{ $t("titles.addExperience") }}
          </div>
          <!-- <button @click="addExperience">Add new</button> -->
        </div>

        <!-- forth -->
        <div
          class="container shadow rounded-2xl py-10 mt-8"
          v-if="
            experienced == true ||
            fresh_graduate == true ||
            cooperative_training == true ||
            professional_technician == true ||
            hajj_season_employees == true ||
            security_officer == true
          "
        >
          <p class="font-bold text-[22px] mb-4">{{ $t("titles.cv") }}</p>
          <p class="mb-4">{{ $t("titles.uploadCV") }}</p>
          <div class="grid grid-cols-1 gap-8">
            <div class="input_wrapper upload_file_text_preview top_label">
              <label class="input_file_label" for="cvFile">
                <span v-if="cvLoading">
                  <div class="lds-ring">
                    <div v-for="i in 4" :key="i" />
                  </div>
                </span>
                <span class="file_name" v-else>
                  <div class="cursor-pointer">
                    <span v-if="cvFile != null">
                      <bdi>
                        {{ cvFile }}
                      </bdi>
                    </span>
                    <span v-else class="flex justify-center gap-2">
                      <img
                        src="@/assets/images/icons/upload.svg"
                        width="25"
                        height="25"
                      />
                      <span>{{ $t("titles.dragOrDropFile") }}</span>
                    </span>
                  </div>
                </span>
              </label>
              <div class="cvUpload">
                <inputs-file-base
                  id="cvFile"
                  name="cvFile"
                  type="file"
                  class="form-control"
                  @change="selectFileToUpload"
                  @handleFileDrop="selectFileToUpload"
                  accept="image/*, .pdf"
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" class="base-btn mr-auto ml-[8%] mt-8">
          {{ $t("BUTTONS.send") }}
        </button>
      </form>
    </VeeForm>
  </div>
</template>

<script setup>
import { useToast, POSITION } from "vue-toastification";
import * as yup from "yup";

const i18n = useI18n();
const toast = useToast();
const config = useRuntimeConfig();
const nationality = ref(null);
const gender = ref(null);
const distincts = ref(null);
const country = ref(null);
const city = ref(null);
const level = ref("experienced");
const skillsOptions = ref([]);
const languagesOptions = ref([]);
const experiences = ref([]);
const addedExperienceVal = ref(false);
const addedSkillVal = ref(false);
const cvFile = ref(null);
const cvLoading = ref(false);
const countryOptions = ref(null);
const countryLoading = ref(true);
const degreeLoading = ref(true);
// const cityOptions = ref(null);
const degreesOptions = ref(null);
const cityLoading = ref(true);
const distinctsLoading = ref(true);
const distinctsOptions = ref(null);
const specializationsOptions = ref(null);
const nationalitiesOptions = ref(null);
const institutionNamesOptions = ref(null);
const educationalLevelsOptions = ref(null);
const maritalStatusOptions = ref(null);
const levelsOptions = ref(null);
const phone_code = ref(null);
const isFormSubmitted = ref(false);
const experienced = ref(true);
const fresh_graduate = ref(false);
const cooperative_training = ref(false);
const professional_technician = ref(false);
const hajj_season_employees = ref(false);
const security_officer = ref(false);
const marital = ref(null);
const educational_levels = ref(null);
const educationCountry = ref(null);
const organization = ref(null);
const specialization = ref(null);
const bachelor = ref(null);
const gradutionYear = ref(new Date().getFullYear());
const expectedGradutionYear = ref(new Date().getFullYear());
const skills = ref([]);
const languages = ref(null);

function resetInputs() {
  nationality.value = ref(null);
  gender.value = ref(null);
  marital.value = ref(null);
  country.value = ref(null);
  city.value = ref(null);
  distincts.value = ref(null);
  educational_levels.value = ref(null);
  educationCountry.value = ref(null);
  organization.value = ref(null);
  specialization.value = ref(null);
  bachelor.value = ref(null);
  languages.value = null;
  gradutionYear.value = ref(new Date().getFullYear());
  expectedGradutionYear.value = ref(new Date().getFullYear());
  // skills.value = null;
  cvFile.value = null;
  if (experiences.value.length > 0) {
    experiences.value = [];
    experiences.value.length = 0;
  }
  if (skills.value.length > 0) {
    skills.value = [];
    skills.value.length = 0;
  }
}

const marital_statusOptions = [
  {
    id: "single",
    name: i18n.t("labels.single"),
    value: "single",
  },
  {
    id: "married",
    name: i18n.t("labels.married"),
    value: "married",
  },
];

const genderOptions = [
  {
    id: "male",
    name: i18n.t("labels.male"),
    value: "male",
  },
  {
    id: "female",
    name: i18n.t("labels.female"),
    value: "female",
  },
];

const formRef = ref(null);
const schema = yup.object().shape({
  // level: yup.string().required(i18n.t("validation.level")),
  first_name: yup.string().required(i18n.t("validation.first_name")),
  second_name: yup.string().required(i18n.t("validation.second_name")),
  last_name: yup.string().required(i18n.t("validation.last_name")),
  email: yup
    .string()
    .email(i18n.t("validation.validEmail"))
    .required(i18n.t("validation.email")),
  phone: yup.string().required(i18n.t("validation.phoneNumber")),
  company_name: yup
    .string()
    .test("company_name", i18n.t("validation.company_name"), (value, { parent }) => {
      if (
        level.value == "experienced" ||
        level.value == "professional_technician" ||
        level.value == "hajj_season_employees" ||
        level.value == "security_officer"
      ) {
        const { level } = parent;
        return Boolean(value);
      } else {
        return true;
      }
    })
    .min(5, i18n.t("validation.minLength")),
  job_title: yup
    .string()
    .test("job_title", i18n.t("validation.job_title"), (value, { parent }) => {
      if (
        level.value == "experienced" ||
        level.value == "professional_technician" ||
        level.value == "hajj_season_employees" ||
        level.value == "security_officer"
      ) {
        const { level } = parent;
        return Boolean(value);
      } else {
        return true;
      }
    })
    .min(5, i18n.t("validation.minLength")),
  from: yup.string().test("from", i18n.t("validation.from"), (value, { parent }) => {
    if (
      level.value == "experienced" ||
      level.value == "professional_technician" ||
      level.value == "hajj_season_employees" ||
      level.value == "security_officer"
    ) {
      const { level } = parent;
      return Boolean(value);
    } else {
      return true;
    }
  }),
  to: yup.string().test("to", i18n.t("validation.to"), (value, { parent }) => {
    if (
      level.value == "experienced" ||
      level.value == "professional_technician" ||
      level.value == "hajj_season_employees" ||
      level.value == "security_officer"
    ) {
      const { level } = parent;
      return Boolean(value);
    } else {
      return true;
    }
  }),

  // company_name: yup.string().test('company_name', i18n.t("validation.company_name"), (value, { parent }) => {
  //   if (level.value == 'fresh_graduate') {
  //     const { level } = parent;
  //     return false
  //   } else {
  //     return Boolean(value);
  //   }
  // }),
  nationality: yup.object().required(i18n.t("validation.nationality")),
  languages: yup.object().required(i18n.t("validation.languages")),
  skills: yup
    .string()
    .required(i18n.t("validation.skills"))
    .min(5, i18n.t("validation.minLength")),
  gender: yup.object().required(i18n.t("validation.gender")),
  marital_status: yup.object().required(i18n.t("validation.marital_status")),
  birthdate: yup.string().required(i18n.t("validation.birthdate")),
  country: yup.object().required(i18n.t("validation.city")),
  // city: yup.object().required(i18n.t("validation.city")),
  // area: yup.object().required(i18n.t("validation.area")),
  education: yup.object().required(i18n.t("validation.education")),
  educationCountry: yup.object().required(i18n.t("validation.country")),
  organization: yup
    .string()
    .required(i18n.t("validation.organization"))
    .min(5, i18n.t("validation.minLength")),
  specialization: yup
    .string()
    .required(i18n.t("validation.specialization"))
    .min(5, i18n.t("validation.minLength")),
  // bachelor: yup.object().required(i18n.t("validation.bachelor")),
  gradutionYear: yup.string().required(i18n.t("validation.gradutionYear")),
  cvFile: yup.string().required(i18n.t("validation.cv")),
  // experiences: yup.array().of(
  //   yup.object().shape({
  //     company_name: yup.string().required('validation.company_name'),
  //     job_title: yup.string().required('validation.job_title'),
  //     from: yup.string().required('validation.from'),
  //     to: yup.string().required('validation.to'),
  //   })
  // ),
  expectedGradutionYear: yup
    .string()
    .test(
      "expectedGradutionYear",
      i18n.t("validation.expectedGradutionYear"),
      (value, { parent }) => {
        if (level.value == "fresh_graduate") {
          const { level } = parent;
          return Boolean(value);
        } else {
          return true;
        }
      }
    ),
  desireLocation: yup
    .string()
    .test("desireLocation", i18n.t("validation.desireLocation"), (value, { parent }) => {
      if (level.value == "hajj_season_employees") {
        const { level } = parent;
        return Boolean(value);
      } else {
        return true;
      }
    })
    .min(5, i18n.t("validation.minLength")),
});

const items = {
  title: i18n.t("titles.getRecruitment"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/recruitment",
      name: i18n.t("NAV.joinUs"),
    },
  ],
};

// data.cv.name.value
const data = {
  cv: {
    name: null,
    path: null,
    file: null,
  },
};

function experiencedFun() {
  experienced.value = true;
  fresh_graduate.value = false;
  cooperative_training.value = false;
  professional_technician.value = false;
  hajj_season_employees.value = false;
  security_officer.value = false;
}
function fresh_graduateFun() {
  experienced.value = false;
  fresh_graduate.value = true;
  cooperative_training.value = false;
  professional_technician.value = false;
  hajj_season_employees.value = false;
  security_officer.value = false;
}
function cooperative_trainingFun() {
  experienced.value = false;
  fresh_graduate.value = false;
  cooperative_training.value = true;
  professional_technician.value = false;
  hajj_season_employees.value = false;
  security_officer.value = false;
}
function professional_technicianFun() {
  experienced.value = false;
  fresh_graduate.value = false;
  cooperative_training.value = false;
  professional_technician.value = true;
  hajj_season_employees.value = false;
  security_officer.value = false;
}
function hajj_season_employeesFun() {
  experienced.value = false;
  fresh_graduate.value = false;
  cooperative_training.value = false;
  professional_technician.value = false;
  hajj_season_employees.value = true;
  security_officer.value = false;
}
function security_officerFun() {
  experienced.value = false;
  fresh_graduate.value = false;
  cooperative_training.value = false;
  professional_technician.value = false;
  hajj_season_employees.value = false;
  security_officer.value = true;
}

function handleDragEnter(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
}
function handleDragLeave(event) {
  event.target.classList.remove("drag-over");
}
function handleDrop(e) {
  selectFileToUpload(e);
  e.preventDefault();
  // let files = e.dataTransfer.files;
  // console.log(files)
  // if (files.length > 0) {
  //   let file = files[0];
  //   console.log(file);
  //   data.cv.name = file.name;
  //   data.cv.file = files[0];
  //   uploadImage(data.cv.file, 'cv');
  // }
}

function addExperience() {
  addedExperienceVal.value = true;
  experiences.value.push({
    company_name: "",
    job_title: "",
    from: "",
    to: "",
  });
}

function removeExperience(index) {
  experiences.value.splice(index, 1);
}

function addSkill() {
  addedSkillVal.value = true;
  skills.value.push({
    name: "",
  });
}

function removeSkill(index) {
  skills.value.splice(index, 1);
}

function selectFileToUpload(e) {
  e.preventDefault();

  if (e.target.files) {
    data.cv.name = e.target.files[0]?.name;
    data.cv.file = e.target.files[0];
  } else {
    let files = e.dataTransfer.files;
    if (files.length > 0) {
      let file = files[0];
      data.cv.name = file.name;
      data.cv.file = files[0];
    }
  }
  uploadImage(data.cv.file, "cv");
}

function uploadImage(event, varName) {
  if (event) {
    cvLoading.value = true;
    const data = new FormData();
    data.append("file", event);
    data.append("attachment_type", "file");
    data.append("model", "cv");

    $fetch(`https://site-be.africa-sa.com/api/general/attachments`, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        cvFile.value = res.data;
        cvLoading.value = false;
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response._data.message, {
          timeout: 2000,
          position: POSITION.BOTTOM_RIGHT,
        });
      });
  }
}

function getCountries() {
  $fetch(`${config.public.baseURL}recruitment/countries`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    countryOptions.value = res.data;
    phone_code.value = res.data[0].phone_code;
    countryLoading.value = false;
    // getCities();
  });
}

function getCities(country) {
  $fetch(`${config.public.baseURL}recruitment/${country.value}/cities`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    cityOptions.value = res.data;
    cityLoading.value = false;
    // getDistincts();
  });
}

function getDistincts(city) {
  $fetch(`${config.public.baseURL}recruitment/${city.value}/distincts`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    distinctsOptions.value = res.data;
    distinctsLoading.value = false;
  });
}

function getMaritalStatusOptions() {
  $fetch(`${config.public.baseURL}recruitment/recruitment_marital_status`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    maritalStatusOptions.value = res.data;
    // distinctsLoading.value = false;
  });
}

function getLevels() {
  $fetch(`${config.public.baseURL}recruitment/recruitment_levels`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    levelsOptions.value = res.data;
    // distinctsLoading.value = false;
  });
}

function getLanguages() {
  $fetch(`${config.public.baseURL}recruitment/recruitment_language`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    languagesOptions.value = res.data;
    // distinctsLoading.value = false;
  });
}

function getSkills() {
  $fetch(`${config.public.baseURL}recruitment/skills`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    skillsOptions.value = res.data;
    // distinctsLoading.value = false;
  });
}

function getDegrees() {
  $fetch(`${config.public.baseURL}recruitment/degrees`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    degreesOptions.value = res.data;
    degreeLoading.value = false;
  });
}

function getEducationalLevels() {
  $fetch(`${config.public.baseURL}recruitment/educational_levels`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    educationalLevelsOptions.value = res.data;
    // educationalLevelsLoading.value = false;
  });
}

function getInstitutionNames() {
  $fetch(`${config.public.baseURL}recruitment/institution_names`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    institutionNamesOptions.value = res.data;
    // institutionNamesLoading.value = false;
  });
}

function getNationalities() {
  $fetch(`${config.public.baseURL}recruitment/nationalities`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    nationalitiesOptions.value = res.data;
    // nationalitiesLoading.value = false;
  });
}

function getRecruitmentGender() {
  $fetch(`${config.public.baseURL}recruitment/recruitment_gender`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    genderOptions.value = res.data;
    // recruitmentGenderLoading.value = false;
  });
}

function getSpecializations() {
  $fetch(`${config.public.baseURL}recruitment/specializations`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    specializationsOptions.value = res.data;
    // specializationsLoading.value = false;
  });
}

function getPhoneCode(e, s) {
  phone_code.value = e.phone_code;
}

function onSubmit(e, actions) {
  e.cvFile = cvFile.value;
  isFormSubmitted.value = true;
  const frmData = new FormData();
  frmData.append("level", level.value);
  frmData.append("first_name", e.first_name);
  frmData.append("second_name", e.second_name);
  frmData.append("last_name", e.last_name);
  if (e.desireLocation) {
    frmData.append("work_of_location_desire", e.desireLocation);
  }
  frmData.append("gender", e.gender.value);
  frmData.append("nationality_id", e.nationality.value);
  frmData.append("email", e.email);
  // frmData.append("phone_code", phone_code?.value);
  frmData.append("phone_code", e.phone_code?.value.phone_code || phone_code?.value);
  frmData.append("phone", e.phone);
  frmData.append("marital_status", e.marital_status.value);
  frmData.append("date_of_birth", e.birthdate);
  frmData.append("recruitment_country_id", e.country.value);
  // frmData.append("city_id", e.city.value);
  // frmData.append("distinct_id", e.area.value);
  frmData.append("education_level_id", e.education.value);
  frmData.append("education_country_id", e.educationCountry.value);
  frmData.append("institution_name", e.organization);
  frmData.append("specialization", e.specialization);
  // frmData.append("degree_id", e.bachelor.value);
  if (e.company_name) {
    frmData.append(`experience[0][company_name]`, e.company_name);
  }
  if (e.job_title) {
    frmData.append(`experience[0][job_title]`, e.job_title);
  }
  if (e.from) {
    frmData.append(`experience[0][from]`, e.from);
  }
  if (e.to) {
    frmData.append(`experience[0][to]`, e.to);
  }
  if (experiences.value.length > 0) {
    experiences.value.map((el, index) => {
      frmData.append(`experience[${index + 1}][company_name]`, el.company_name);
      frmData.append(`experience[${index + 1}][job_title]`, el.job_title);
      frmData.append(`experience[${index + 1}][from]`, el.from);
      frmData.append(`experience[${index + 1}][to]`, el.to);
    });
  }
  if (e.skills) {
    frmData.append(`skills[0][skill]`, e.skills);
  }
  if (skills.value.length > 0) {
    skills.value.map((el, index) => {
      frmData.append(`skills[${index + 1}][skill]`, el.name);
    });
  }
  // e.skills.value.map((el, index) => {
  //   frmData.append(`skills[${index}]`, el);
  // });
  e.languages.value.map((el, index) => {
    frmData.append(`language[${index}][name]`, el);
  });
  frmData.append("cv", e.cvFile);
  if (e.gradutionYear) {
    frmData.append("graduation_year", new Date(e.gradutionYear).getFullYear());
  }
  if (e.expectedGradutionYear) {
    frmData.append(
      "expected_graduation_year",
      new Date(e.expectedGradutionYear).getFullYear()
    );
  }

  try {
    $fetch(`${config.public.baseURL}recruitment/apply`, {
      method: "POST",
      body: frmData,
      headers: {
        Accept: "application/json",
        lang: i18n.locale.value,
        // "Accept-Language": i18n.locale.value,
      },
    })
      .then((res) => {
        resetInputs();
        actions.setFieldValue("company_name", ref(null));
        actions.setFieldValue("job_title", ref(null));
        actions.setFieldValue("from", ref(null));
        actions.setFieldValue("to", ref(null));
        // actions.resetField();
        actions.resetForm();
        toast.success(i18n.t("titles.sentSuccessfully"), {
          timeout: 2000,
          position: POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response._data.message, {
          timeout: 2000,
          position: POSITION.BOTTOM_RIGHT,
        });
      });
  } catch (err) {
    toast.error(err.response._data.message, {
      timeout: 2000,
      position: POSITION.BOTTOM_RIGHT,
    });
  }
}

onMounted(() => {
  getCountries();
  // getDegrees();
  getEducationalLevels();
  // getInstitutionNames();
  getNationalities();
  // getRecruitmentGender();
  // getSpecializations();
  getMaritalStatusOptions();
  getLevels();
  getSkills();
  getLanguages();
});

watch(
  () => experiences.value,
  () => {
    addExperience();
  }
);
watch(
  () => experiences.value,
  () => {
    onSubmit();
  }
);
</script>

<style lang="scss">
.recruitmentForm {
  .error {
    @apply text-red-500 text-sm mt-1;
  }

  .p-dropdown,
  .p-calendar .p-inputtext {
    @apply shadow-none border-[#e5e7eb];
    border-radius: 30px !important;
    padding: 2px;
  }

  .p-multiselect {
    @apply shadow-none border-[#e5e7eb];
    border-radius: 30px !important;
    padding: 2px;
    font-family: din, sans-serif;
  }

  .p-inputtext,
  .p-togglebutton,
  .p-selectbutton,
  .p-inputgroup {
    @apply shadow-none;
  }

  svg path {
    fill: #a77747;
  }

  .p-calendar .p-inputtext::-webkit-input-placeholder {
    font-family: din, sans-serif;
    color: #71717a;
    padding: 0px 12px;
  }

  .p-dropdown .p-dropdown-label.p-placeholder {
    // @apply font-din
    font-family: din, sans-serif;
  }

  input[type="radio"] {
    margin-right: auto;
    content: url("@/assets/images/icons/unchecked.svg");
    display: block;
    width: 25px;
    accent-color: white;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    content: url("@/assets/images/icons/uil_calender.svg");
    font-size: 25px;
    padding: 0;
    background: none;
  }

  input[type="date"]::-webkit-datetime-edit-fields-wrapper {
    // color: transparent;
  }

  input[type="radio"]:checked {
    content: url("@/assets/images/icons/checked.svg");
    display: block;
    width: 25px;
    accent-color: white;
  }

  input[type="radio"]:checked .userLevel {
    @apply border border-primary border-2;
  }
}

input[type="date"]:before {
  color: lightgrey;
  content: attr(placeholder) !important;
  margin-right: 0.5em;
}

.upload_file_text_preview {
  width: 100%;
  background: #fefefe;
  border-radius: 20px;
  padding: 35px 20px;
  position: relative;
  border: 1px dashed #d4d4d4;
  text-align: center;

  .input_file_label {
    span {
      font-size: 17px;
      color: #b1b8c0;
      font-weight: 400;
    }
  }

  input.form-control {
    visibility: hidden !important;
    position: absolute;
  }

  // img {
  //   position: absolute;
  //   inset: 33% 40% 25%;
  // }
}

.lds-ring {
  display: inline-block;
  position: relative;
  background-color: grey;
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.cvUpload {
  .input_wrapper input {
    display: none;
  }
}

.fileDropArea {
  border: 2px dashed rgb(225, 225, 225);
  padding: 30px;
}

.drag-over {
  border-color: #333;
}
</style>

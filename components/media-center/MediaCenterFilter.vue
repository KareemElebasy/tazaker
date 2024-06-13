<template>
  <div class="bg-white border w-full p-5 rounded-xl">
    <div v-if="keyword">
      <h2 class="font-bold">ابحث عن خبر</h2>
      <div class="relative">
        <i
          class="fa fa-search fa-lg search-icon absolute top-[50%] gold-text"
        ></i>
        <input
          type="text"
          v-model="form.search"
          placeholder="اكتب..."
          class="form-control outline-none border rounded-3xl my-5 py-3 px-3 w-full"
        />
      </div>
    </div>
    <h2 class="font-bold mb-2">{{ $t("NAV.categories") }}</h2>

    <ul class="ms-5 mediaCenterList space-y-2">
      <li>
        <label for="all-category"
          >{{ $t("labels.all") }}

          <input
            type="checkbox"
            @change="checkSelectAllCategoris()"
            v-model="selectAllCategories"
            :value="true"
            id="all-category"
            class="checked:bg-blue-500"
          />
        </label>
      </li>

      <li v-for="cat in categories" :key="cat.id">
        <label :for="`cat${cat.id}`"
          >{{ cat.name ? cat.name : "-" }}

          <input
            type="checkbox"
            :id="`cat${cat.id}`"
            class="checked:bg-blue-500"
            :value="cat.id"
            v-model="form.category_id"
          />
        </label>
      </li>
    </ul>

    <hr class="my-5" />

    <h2 class="font-bold mb-2">{{ $t("labels.year") }}</h2>

    <ul class="ms-5 mediaCenterList space-y-2">
      <li>
        <label for="all"
          >{{ $t("labels.all") }}

          <input
            type="checkbox"
            @change="checkSelectAllYears()"
            v-model="selectAllYears"
            :value="true"
            id="all"
            class="checked:bg-blue-500"
          />
        </label>
      </li>
      <li v-for="(year, index) in years" :key="index">
        <label :for="`year${index}`"
          >{{ year }}
          <input
            type="checkbox"
            :id="`year${index}`"
            class="checked:bg-blue-500"
            :value="year"
            v-model="form.years"
          />
        </label>
      </li>
    </ul>

    <button
      type="button"
      @click="setFilter"
      class="base-btn h-10 w-full mt-5 font-medium"
    >
      {{ $t("labels.filter") }}
    </button>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const emit = defineEmits(["selectAll"]);
const props = defineProps({
  categories: {
    required: false,
  },
  keyword: {
    required: false,
  },
});

const form = reactive({
  category_id: route.query.category_id
    ? JSON.parse(route.query.category_id)
    : [],
  years: route.query.years ? JSON.parse(route.query.years) : [],
  search: route.query.search || null,
});

const years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023"];

const selectAllCategories = ref(false);
const selectAllYears = ref(false);

function checkSelectAllCategoris() {
  if (selectAllCategories.value) {
    form.category_id = props.categories.map((el) => el.id);
  } else {
    form.category_id = [];
  }

  // emit("selectAll", category_id.value);
}
function checkSelectAllYears() {
  if (selectAllYears.value) {
    form.years = years;
  } else {
    form.years = [];
  }
}

function setFilter() {
  let obj = {};
  for (const [key, value] of Object.entries(form)) {
    if (Array.isArray(value)) {
      let val = value.map((el) => el.id ?? el);

      obj[key] = val;
    } else {
      obj[key] = value;
    }
  }

  router
    .push({
      query: Object.assign({}, route.query, {
        page: 1,
        years: JSON.stringify(obj.years),
        category_id: JSON.stringify(obj.category_id),
        search: obj.search,
      }),
    })
    .catch(() => {});
}
</script>

<style lang="scss">
.mediaCenterList {
  list-style-image: url("~/assets/images/icons/servicesIcon.svg");
  li {
    label {
      @apply flex justify-between;
    }
  }
}
.search-icon {
  inset-inline-end: 20px;
}
</style>

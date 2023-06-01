<template>

    <div class=" flex flex-col shrink "  >
  
      <div class="menu h-24  bg-green-500 flex-none">menu</div>
      <div class=" bg-red-200 h-24  flex items-center ">
  
        <el-row class="" >
          <el-button type="primary color" class="bg-indigo-500 hover:bg-cyan-600">新增</el-button>
          <el-button type="info" class="bg-indigo-500 hover:bg-cyan-600">编辑</el-button>
          <el-button type="danger" class="bg-indigo-500 hover:bg-cyan-600">删除</el-button>
          <el-button type="success" class="bg-cyan-500 hover:bg-cyan-600">保存</el-button>
        </el-row>
  
      </div>
      <div class="contentArea flex flex-1 ">
        <div class="bg-red-300   w-60 min-w-full md:min-w-0  flex  justify-center">
          <div class="flex flex-col">
            <div> <h1 class="justify-center  flex flex-1">规则列表</h1></div>
            <div>         
               <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">Check all
            </el-checkbox>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" class="flex flex-col">
              <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
            </el-checkbox-group></div>
  
          </div>
  
  
  
  
        </div>
        <div class="item bg-slate-50 flex flex-row  flex-1">
          <div class="addtion flex-1">
            <div class="flex justify-center h-12 border-b-2 border-violet-400">
              <h1 class=" flex items-center">如 果</h1>
            </div>
            <div>
                   <el-cascader :options="if_addtion" />
  
            </div>
  
  
          </div>
          <div class="result flex-1 border-r-2 border-l-2 border-violet-200">
            <div class="flex justify-center h-12 border-b-2 border-violet-400">
              <h1 class=" flex items-center">那 么</h1>
            </div>
          </div>
          <div class="exception flex-1">
            <div class="flex justify-center h-12 border-b-2 border-violet-400">
              <h1 class=" flex items-center">否 则</h1>
            </div>
          </div>
  
  
  
        </div>
      </div>
  
  
    </div>
  
  
  </template>
  <script setup>
    import {
      defineComponent,
      reactive,
      toRefs,
      ref
    } from 'vue';
  
  
    const handleChange = (value) => {
      console.log(value);
    };
    const checkAll = ref(false);
    const isIndeterminate = ref(true);
    const checkedCities = ref(['Shanghai', 'Beijing']);
    const cities = ref(['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']);
  
    const handleCheckAllChange = (val) => {
      checkedCities.value = val ? cities : []
      isIndeterminate.value = false
    };
    const handleCheckedCitiesChange = (value) => {
      const checkedCount = value.length
      checkAll.value = checkedCount === cities.length
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
    };
  
    const if_addtion = [
    {
      value: 'instrument',
      label: '仪器',
      children: [
        {
          value: 'isInclude',
          label: '是否包含 (条件)',
          children: [
            {
              value: '1',
              label: 'A仪器',
            },
            {
              value: '2',
              label: 'B仪器',
            },
            {
              value: '3',
              label: 'C仪器',
            },
            {
              value: '4',
              label: 'D仪器',
            },
          ],
        },
        {
          value: 'noInclude',
          label: '不包含 (条件)',
          children: [
            {
              value: '5',
              label: 'E仪器',
            },
            {
              value: '4',
              label: 'D仪器',
            },
          ],
        },
      ],
    },
    {
      value: 'testItems',
      label: '测试项目',
      children: [
        {
          value: '1',
          label: '身高',
          children: [
            {
              value: 'd',
              label: '大于 (条件)',
            },
            {
              value: 'x',
              label: '低于 (条件)',
            },
            {
              value: 'dy',
              label: '等于 (条件)',
            }
          ],
        },
        {
          value: 'g',
          label: '分组项',
          children: [
            {
              value: 'a',
              label: 'A测试项',
              children :[
              {
              value: 'd',
              label: '已定义 (条件)',
            },
            {
              value: 'd',
              label: '未定义 (条件)',
            }
              ]},
             {value: 'b',
              label: 'B测试项',
              children :[
              {
              value: 'd',
              label: '已定义 (条件)',
            },
            {
              value: 'd',
              label: '未定义 (条件)',
            }
              ]},

         {
              value: 'c',
              label: 'C测试项',
              children :[
              {
              value: 'd',
              label: '已定义 (条件)',
               },
               {
              value: 'd',
              label: '未定义 (条件)',
              }           
              ],
            },
        ]
        },
        {
          value: '3',
          label: '智力',
        },
      ],
    }
  ]
  </script>
  <style>
  
  </style>
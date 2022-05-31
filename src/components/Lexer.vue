<template>
  <div id="lexer">
    <div class="input">
      <div>输入程序</div>
      <el-input v-model="input" :rows="20" type="textarea" placeholder="请输入程序代码" />
      <el-button @click="start">提交代码</el-button>
      <el-button @click="visible = true">
        关键词表维护
      </el-button>
      <el-dialog v-model="visible">
        <el-table :data="keywords" style="width: 100%">
          <el-table-column prop="id" label="id" width="350" />
          <el-table-column prop="content" label="关键词" width="180" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button size="small" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
      <div>
        <el-input v-model="addKeyword" placeholder="请输入关键字" />
        <el-button @click="handleAddKeyword">添加关键字</el-button>
      </div>

    </div>
    <div id="dfa">
      <div class="start">
        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="593.501" viewBox="0 0 127 593.501">
          <g id="椭圆_1" data-name="椭圆 1" transform="translate(77)" fill="#fff" stroke="#707070" stroke-width="1">
            <circle cx="25" cy="25" r="25" stroke="none" />
            <circle cx="25" cy="25" r="24.5" fill="none" />
          </g>
          <line id="直线_1" data-name="直线 1" x2="1" y2="544" transform="translate(101.5 49.5)" fill="none"
            stroke="#707070" stroke-width="1" />
          <line id="直线_80" data-name="直线 80" x2="77" transform="translate(0 25.5)" fill="none" stroke="#707070"
            stroke-width="1" />
          <line id="直线_81" data-name="直线 81" x1="8" y2="4.5" transform="translate(69.5 25.5)" fill="none"
            stroke="#707070" stroke-width="1" />
          <line id="直线_82" data-name="直线 82" x2="8" y2="5.5" transform="translate(69.5 20)" fill="none" stroke="#707070"
            stroke-width="1" />
          <text id="S" transform="translate(94 35)" fill="#707070" font-size="29" font-family="SegoeUI, Segoe UI">
            <tspan x="0" y="0">S</tspan>
          </text>
        </svg>

      </div>
      <div class="body">
        <div class="intc" ref="intc">
          <svg xmlns="http://www.w3.org/2000/svg" width="359.5" height="71" viewBox="0 0 359.5 71">
            <g id="椭圆_3" data-name="椭圆 3" transform="translate(76.5 21)" fill="#fff" stroke="#707070" stroke-width="1">
              <circle cx="25" cy="25" r="25" stroke="none" />
              <circle cx="25" cy="25" r="24.5" fill="none" />
            </g>
            <line id="直线_3" data-name="直线 3" x2="77" transform="translate(0 46.5)" fill="none" stroke="#707070"
              stroke-width="1" />
            <line id="直线_20" data-name="直线 20" x2="233" transform="translate(126.5 46)" fill="none" stroke="#707070"
              stroke-width="1" />
            <line id="直线_78" data-name="直线 78" x1="7" y2="5" transform="translate(69.5 46)" fill="none" stroke="#707070"
              stroke-width="1" />
            <line id="直线_57" data-name="直线 57" x1="7" y2="5" transform="translate(113.825 16.989) rotate(114)"
              fill="none" stroke="#707070" stroke-width="1" />
            <line id="直线_79" data-name="直线 79" x2="7" y2="5" transform="translate(69.5 41)" fill="none" stroke="#707070"
              stroke-width="1" />
            <line id="直线_56" data-name="直线 56" x2="7" y2="5" transform="translate(118.393 19.023) rotate(114)"
              fill="none" stroke="#707070" stroke-width="1" />
            <path id="路径_10" data-name="路径 10"
              d="M1258.593,499.991c-13.575-17.873,10.093-23.265,18.66-17.162s1.371,16.465,1.371,16.465"
              transform="matrix(0.998, 0.07, -0.07, 0.998, -1129.941, -563.977)" fill="none" stroke="#707070"
              stroke-width="1" />
            <text id="数字" transform="translate(17.5 39)" fill="#707070" font-size="16"
              font-family="YuGothicUI-Regular, Yu Gothic UI">
              <tspan x="0" y="0">数字</tspan>
            </text>
            <text id="数字-2" data-name="数字" transform="translate(119.5 17)" fill="#707070" font-size="16"
              font-family="YuGothicUI-Regular, Yu Gothic UI">
              <tspan x="0" y="0">数字</tspan>
            </text>
            <text id="无符号整数" transform="translate(265.5 42)" fill="#707070" font-size="16"
              font-family="YuGothicUI-Regular, Yu Gothic UI">
              <tspan x="0" y="0">无符号整数</tspan>
            </text>
          </svg>
        </div>
        <div class="identKeyword">
          <div class="base">
            <svg xmlns="http://www.w3.org/2000/svg" width="292" height="70.65" viewBox="0 0 292 70.65">
              <g id="椭圆_2" data-name="椭圆 2" transform="translate(103 20.65)" fill="#fff" stroke="#707070"
                stroke-width="1">
                <circle cx="25" cy="25" r="25" stroke="none" />
                <circle cx="25" cy="25" r="24.5" fill="none" />
              </g>
              <line id="直线_2" data-name="直线 2" x2="103" transform="translate(0 45.15)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_19" data-name="直线 19" x2="139" transform="translate(153 45.65)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_76" data-name="直线 76" x1="7" y2="5" transform="translate(96 44.65)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_55" data-name="直线 55" x1="7" y2="5" transform="translate(140.325 16.639) rotate(114)"
                fill="none" stroke="#707070" stroke-width="1" />
              <line id="直线_77" data-name="直线 77" x2="7" y2="5" transform="translate(96 39.65)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_54" data-name="直线 54" x2="7" y2="5" transform="translate(144.893 18.673) rotate(114)"
                fill="none" stroke="#707070" stroke-width="1" />
              <path id="路径_9" data-name="路径 9"
                d="M1258.593,501.89c-13.575-19.606,10.093-25.522,18.66-18.827s1.371,18.062,1.371,18.062"
                transform="matrix(0.998, 0.07, -0.07, 0.998, -1103.309, -566.221)" fill="none" stroke="#707070"
                stroke-width="1" />
              <text id="字母" transform="translate(28 34.65)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">字母</tspan>
              </text>
              <text id="字母_数字" data-name="字母、数字" transform="translate(146 18.65)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">字母、数字</tspan>
              </text>
            </svg>

          </div>
          <div class="right">
            <div class="identifier">
              <svg xmlns="http://www.w3.org/2000/svg" width="94.5" height="52.5" viewBox="0 0 94.5 52.5">
                <line id="直线_84" data-name="直线 84" x1="7" y2="5" transform="translate(87 21)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_83" data-name="直线 83" x2="7" y2="5" transform="translate(87 16)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <text id="标识符" transform="translate(26 17)" fill="#707070" font-size="16"
                  font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">
                  <tspan x="0" y="0">标识</tspan>
                  <tspan y="0" font-family="YuGothicUI-Regular, Yu Gothic UI">符</tspan>
                </text>
                <path id="路径_11" data-name="路径 11" d="M94,0H0" transform="translate(0.5 21.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_99" data-name="直线 99" y2="31" transform="translate(0.5 21.5)" fill="none" stroke="#707070"
                  stroke-width="1" />
              </svg>
            </div>
            <div class="keyword">
              <svg xmlns="http://www.w3.org/2000/svg" width="94" height="26.407" viewBox="0 0 94 26.407">
                <line id="直线_36" data-name="直线 36" x1="7" y2="5" transform="translate(86.5 21)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_37" data-name="直线 37" x2="7" y2="5" transform="translate(86.5 16)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <text id="关键字" transform="translate(23.5 17)" fill="#707070" font-size="16"
                  font-family="YuGothicUI-Regular, Yu Gothic UI">
                  <tspan x="0" y="0">关</tspan>
                  <tspan y="0" font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">键</tspan>
                  <tspan y="0">字</tspan>
                </text>
                <line id="直线_98" data-name="直线 98" x1="94" transform="translate(0 21)" fill="none" stroke="#707070"
                  stroke-width="1" />
              </svg>
            </div>
          </div>
        </div>
        <div class="asingle">
          <svg xmlns="http://www.w3.org/2000/svg" width="386.374" height="30.907" viewBox="0 0 386.374 30.907">
            <line id="直线_4" data-name="直线 4" x2="386.084" transform="translate(0 25.5)" fill="none" stroke="#707070"
              stroke-width="1" />
            <line id="直线_34" data-name="直线 34" x1="7" y2="5" transform="translate(379.084 25.5)" fill="none"
              stroke="#707070" stroke-width="1" />
            <line id="直线_35" data-name="直线 35" x2="7" y2="5" transform="translate(379.084 20.5)" fill="none"
              stroke="#707070" stroke-width="1" />
            <text id="_-_:" data-name="+ , - , * , / , ( , ) , [ , ] , ; , = , &lt; , :" transform="translate(21 17)"
              fill="#707070" font-size="16" font-family="SegoeUI, Segoe UI">
              <tspan x="0" y="0">+ , - , * , / , ( , ) , [ , ] , ; , = , &lt; , :</tspan>
            </text>
            <text id="单分界符" transform="translate(308 22)" fill="#707070" font-size="16"
              font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">
              <tspan x="0" y="0">单</tspan>
              <tspan y="0" font-family="YuGothicUI-Regular, Yu Gothic UI">分界符</tspan>
            </text>
          </svg>
        </div>
        <div class="singleDouble">
          <div class="single">
            <svg xmlns="http://www.w3.org/2000/svg" width="258.084" height="38.5" viewBox="0 0 258.084 38.5">
              <line id="直线_87" data-name="直线 87" x1="7" y2="5" transform="translate(250.584 20.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_88" data-name="直线 88" x2="7" y2="5" transform="translate(250.584 15.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <text id="单分界符" transform="translate(180 17)" fill="#707070" font-size="16"
                font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">
                <tspan x="0" y="0">单</tspan>
                <tspan y="0" font-family="YuGothicUI-Regular, Yu Gothic UI">分界符</tspan>
              </text>
              <line id="直线_85" data-name="直线 85" y1="18" transform="translate(0.5 20.5)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_86" data-name="直线 86" x2="257.584" transform="translate(0.5 20.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <text id="其他符号" transform="translate(5 17)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">其他符号</tspan>
              </text>
            </svg>
          </div>
          <div class="baseDouble">
            <div class="base">
              <svg xmlns="http://www.w3.org/2000/svg" width="153" height="51" viewBox="0 0 153 51">
                <g id="椭圆_5" data-name="椭圆 5" transform="translate(103 1)" fill="#fff" stroke="#707070"
                  stroke-width="1">
                  <circle cx="25" cy="25" r="25" stroke="none" />
                  <circle cx="25" cy="25" r="24.5" fill="none" />
                </g>
                <line id="直线_5" data-name="直线 5" x2="103" transform="translate(0 25.5)" fill="none" stroke="#707070"
                  stroke-width="1" />
                <line id="直线_68" data-name="直线 68" x1="7" y2="5" transform="translate(97 25.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_69" data-name="直线 69" x2="7" y2="5" transform="translate(97 20.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <text id=":" transform="translate(21 17)" fill="#707070" font-size="16" font-family="SegoeUI, Segoe UI">
                  <tspan x="0" y="0">:</tspan>
                </text>
              </svg>

            </div>
            <div class="double">
              <svg xmlns="http://www.w3.org/2000/svg" width="234.374" height="50" viewBox="0 0 234.374 50">
                <g id="椭圆_12" data-name="椭圆 12" transform="translate(60)" fill="#fff" stroke="#707070" stroke-width="1">
                  <circle cx="25" cy="25" r="25" stroke="none" />
                  <circle cx="25" cy="25" r="24.5" fill="none" />
                </g>
                <line id="直线_14" data-name="直线 14" x2="124" transform="translate(110 25)" fill="none" stroke="#707070"
                  stroke-width="1" />
                <line id="直线_13" data-name="直线 13" x2="60.247" transform="translate(0 24.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_66" data-name="直线 66" x1="7" y2="5" transform="translate(53.247 24.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_32" data-name="直线 32" x1="7" y2="5" transform="translate(227.084 25)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_67" data-name="直线 67" x2="7" y2="5" transform="translate(53.247 19.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_33" data-name="直线 33" x2="7" y2="5" transform="translate(227.084 20)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <text id="双分界符" transform="translate(156 21)" fill="#707070" font-size="16"
                  font-family="YuGothicUI-Regular, Yu Gothic UI">
                  <tspan x="0" y="0">双分界符</tspan>
                </text>
                <text id="_" data-name="=" transform="translate(21 19)" fill="#707070" font-size="16"
                  font-family="SegoeUI, Segoe UI">
                  <tspan x="0" y="0">=</tspan>
                </text>
              </svg>

            </div>
          </div>
        </div>
        <div class="notes">
          <svg xmlns="http://www.w3.org/2000/svg" width="385.374" height="73" viewBox="0 0 385.374 73">
            <g id="注释" transform="translate(-197 -447)">
              <g id="椭圆_6" data-name="椭圆 6" transform="translate(300 470)" fill="#fff" stroke="#707070"
                stroke-width="1">
                <circle cx="25" cy="25" r="25" stroke="none" />
                <circle cx="25" cy="25" r="24.5" fill="none" />
              </g>
              <g id="椭圆_11" data-name="椭圆 11" transform="translate(410 470)" fill="#fff" stroke="#707070"
                stroke-width="1">
                <circle cx="25" cy="25" r="25" stroke="none" />
                <circle cx="25" cy="25" r="24.5" fill="none" />
              </g>
              <line id="直线_15" data-name="直线 15" x2="122" transform="translate(460 495)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_6" data-name="直线 6" x2="103" transform="translate(197 494.5)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_12" data-name="直线 12" x2="60.247" transform="translate(350 494.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_64" data-name="直线 64" x1="7" y2="5" transform="translate(403.247 494.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_70" data-name="直线 70" x1="7" y2="5" transform="translate(293 494.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_30" data-name="直线 30" x1="7" y2="5" transform="translate(575.084 495)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_43" data-name="直线 43" x1="7" y2="5" transform="translate(337.788 465.989) rotate(114)"
                fill="none" stroke="#707070" stroke-width="1" />
              <line id="直线_65" data-name="直线 65" x2="7" y2="5" transform="translate(403.247 489.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_71" data-name="直线 71" x2="7" y2="5" transform="translate(293 489.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_31" data-name="直线 31" x2="7" y2="5" transform="translate(575.084 490)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_42" data-name="直线 42" x2="7" y2="5" transform="translate(342.356 468.023) rotate(114)"
                fill="none" stroke="#707070" stroke-width="1" />
              <path id="路径_3" data-name="路径 3"
                d="M1258.593,500.917c-13.575-18.717,10.093-24.365,18.66-17.973s1.371,17.243,1.371,17.243"
                transform="matrix(0.998, 0.07, -0.07, 0.998, -905.914, -115.9)" fill="none" stroke="#707070"
                stroke-width="1" />
              <text id="其他符号" transform="translate(339 464)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">其他符号</tspan>
              </text>
              <text id="_" data-name="{" transform="translate(216 491)" fill="#707070" font-size="16"
                font-family="SegoeUI, Segoe UI">
                <tspan x="0" y="0">{</tspan>
              </text>
              <text id="_2" data-name="}" transform="translate(372 491)" fill="#707070" font-size="16"
                font-family="SegoeUI, Segoe UI">
                <tspan x="0" y="0">}</tspan>
              </text>
              <text id="注释-2" data-name="注释" transform="translate(524 490)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">注</tspan>
                <tspan y="0" font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">释</tspan>
              </text>
            </g>
          </svg>
        </div>
        <div class="endArray">
          <div class="end">
            <svg xmlns="http://www.w3.org/2000/svg" width="258.5" height="39" viewBox="0 0 258.5 39">
              <line id="直线_95" data-name="直线 95" x1="7" y2="5" transform="translate(250.584 21)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_96" data-name="直线 96" x2="7" y2="5" transform="translate(250.584 16)" fill="none"
                stroke="#707070" stroke-width="1" />
              <text id="程序结束标识" transform="translate(147.5 17)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">程序</tspan>
                <tspan y="0" font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">结</tspan>
                <tspan y="0">束</tspan>
                <tspan y="0" font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">标识</tspan>
              </text>
              <line id="直线_91" data-name="直线 91" y1="18" transform="translate(0.5 21)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_92" data-name="直线 92" y1="18" transform="translate(0.5 21)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_93" data-name="直线 93" x2="240" transform="translate(18.5 21)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_94" data-name="直线 94" x2="258" transform="translate(0.5 21)" fill="none" stroke="#707070"
                stroke-width="1" />
              <text id="其他符号" transform="translate(5 17.5)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">其他符号</tspan>
              </text>
              <text id="其他符号-2" data-name="其他符号" transform="translate(5 17.5)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">其他符号</tspan>
              </text>
            </svg>
          </div>
          <div class="baseArray">
            <div class="base">
              <svg xmlns="http://www.w3.org/2000/svg" width="153" height="50" viewBox="0 0 153 50">
                <g id="椭圆_7" data-name="椭圆 7" transform="translate(103)" fill="#fff" stroke="#707070" stroke-width="1">
                  <circle cx="25" cy="25" r="25" stroke="none" />
                  <circle cx="25" cy="25" r="24.5" fill="none" />
                </g>
                <line id="直线_7" data-name="直线 7" x2="103" transform="translate(0 24.5)" fill="none" stroke="#707070"
                  stroke-width="1" />
                <line id="直线_72" data-name="直线 72" x1="7" y2="5" transform="translate(96 25)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_73" data-name="直线 73" x2="7" y2="5" transform="translate(96 20)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <text id="_." data-name="." transform="translate(22 21)" fill="#707070" font-size="16"
                  font-family="SegoeUI, Segoe UI">
                  <tspan x="0" y="0">.</tspan>
                </text>
              </svg>

            </div>
            <div class="array">
              <svg xmlns="http://www.w3.org/2000/svg" width="232.374" height="50" viewBox="0 0 232.374 50">
                <g id="椭圆_9" data-name="椭圆 9" transform="translate(60)" fill="#fff" stroke="#707070" stroke-width="1">
                  <circle cx="25" cy="25" r="25" stroke="none" />
                  <circle cx="25" cy="25" r="24.5" fill="none" />
                </g>
                <line id="直线_17" data-name="直线 17" x2="122" transform="translate(110 25)" fill="none" stroke="#707070"
                  stroke-width="1" />
                <line id="直线_10" data-name="直线 10" x2="60.247" transform="translate(0 24.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_62" data-name="直线 62" x1="7" y2="5" transform="translate(53 24.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_28" data-name="直线 28" x1="7" y2="5" transform="translate(225.084 25)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_63" data-name="直线 63" x2="7" y2="5" transform="translate(53 19.5)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <line id="直线_29" data-name="直线 29" x2="7" y2="5" transform="translate(225.084 20)" fill="none"
                  stroke="#707070" stroke-width="1" />
                <text id="_." data-name="." transform="translate(23 21)" fill="#707070" font-size="16"
                  font-family="SegoeUI, Segoe UI">
                  <tspan x="0" y="0">.</tspan>
                </text>
                <text id="数组下标界限符" transform="translate(113 21)" fill="#707070" font-size="16"
                  font-family="YuGothicUI-Regular, Yu Gothic UI">
                  <tspan x="0" y="0">数</tspan>
                  <tspan y="0" font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">组</tspan>
                  <tspan y="0">下</tspan>
                  <tspan y="0" font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">标</tspan>
                  <tspan y="0">界限符</tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div class="string">
          <svg xmlns="http://www.w3.org/2000/svg" width="386.374" height="72.83" viewBox="0 0 386.374 72.83">
            <g id="字符串标识符" transform="translate(-196 -623.17)">
              <g id="椭圆_8" data-name="椭圆 8" transform="translate(299 646)" fill="#fff" stroke="#707070"
                stroke-width="1">
                <circle cx="25" cy="25" r="25" stroke="none" />
                <circle cx="25" cy="25" r="24.5" fill="none" />
              </g>
              <g id="椭圆_10" data-name="椭圆 10" transform="translate(409 646)" fill="#fff" stroke="#707070"
                stroke-width="1">
                <circle cx="25" cy="25" r="25" stroke="none" />
                <circle cx="25" cy="25" r="24.5" fill="none" />
              </g>
              <line id="直线_16" data-name="直线 16" x2="123" transform="translate(459 671)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_8" data-name="直线 8" x2="103" transform="translate(196 670.5)" fill="none" stroke="#707070"
                stroke-width="1" />
              <line id="直线_11" data-name="直线 11" x2="60.247" transform="translate(349 670.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_26" data-name="直线 26" x1="7" y2="5" transform="translate(575.084 671)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_60" data-name="直线 60" x1="7" y2="5" transform="translate(402 670.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_74" data-name="直线 74" x1="7" y2="5" transform="translate(293 671)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_51" data-name="直线 51" x1="7" y2="5" transform="translate(337.788 641.989) rotate(114)"
                fill="none" stroke="#707070" stroke-width="1" />
              <line id="直线_27" data-name="直线 27" x2="7" y2="5" transform="translate(575.084 666)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_61" data-name="直线 61" x2="7" y2="5" transform="translate(402 665.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_75" data-name="直线 75" x2="7" y2="5" transform="translate(293 666)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_50" data-name="直线 50" x2="7" y2="5" transform="translate(342.356 644.023) rotate(114)"
                fill="none" stroke="#707070" stroke-width="1" />
              <path id="路径_7" data-name="路径 7"
                d="M1258.593,499.624c-13.575-17.537,10.093-22.829,18.66-16.84s1.371,16.156,1.371,16.156"
                transform="matrix(0.998, 0.07, -0.07, 0.998, -906.004, 61.39)" fill="none" stroke="#707070"
                stroke-width="1" />
              <text id="其他符号" transform="translate(339 640.17)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">其他符号</tspan>
              </text>
              <text id="_" data-name="&apos;" transform="translate(219 666)" fill="#707070" font-size="16"
                font-family="SegoeUI, Segoe UI">
                <tspan x="0" y="0">&apos;</tspan>
              </text>
              <text id="_2" data-name="&apos;" transform="translate(374 667)" fill="#707070" font-size="16"
                font-family="SegoeUI, Segoe UI">
                <tspan x="0" y="0">&apos;</tspan>
              </text>
              <text id="字符串标识符-2" data-name="字符串标识符" transform="translate(473 667)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">字符串</tspan>
                <tspan y="0" font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">标识</tspan>
                <tspan y="0">符</tspan>
              </text>
            </g>
          </svg>
        </div>
        <div class="error">
          <svg xmlns="http://www.w3.org/2000/svg" width="384.874" height="27.407" viewBox="0 0 384.874 27.407">
            <g id="报错" transform="translate(-197.5 -716.5)">
              <line id="直线_18" data-name="直线 18" x2="384.584" transform="translate(197.5 738.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_58" data-name="直线 58" x1="7" y2="5" transform="translate(575.084 738.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <line id="直线_59" data-name="直线 59" x2="7" y2="5" transform="translate(575.084 733.5)" fill="none"
                stroke="#707070" stroke-width="1" />
              <text id="其他符号" transform="translate(203.5 733.5)" fill="#707070" font-size="16"
                font-family="YuGothicUI-Regular, Yu Gothic UI">
                <tspan x="0" y="0">其他符号</tspan>
              </text>
              <text id="报错-2" data-name="报错" transform="translate(535 736)" fill="#707070" font-size="16"
                font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">
                <tspan x="0" y="0">报错</tspan>
              </text>
            </g>
          </svg>
        </div>
      </div>
      <div class="last">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="665.5" viewBox="0 0 50 665.5">
          <g id="椭圆_13" data-name="椭圆 13" transform="translate(0 615.5)" fill="#fff" stroke="#707070" stroke-width="1">
            <circle cx="25" cy="25" r="25" stroke="none" />
            <circle cx="25" cy="25" r="24.5" fill="none" />
          </g>
          <line id="直线_21" data-name="直线 21" y2="616" transform="translate(24.084)" fill="none" stroke="#707070"
            stroke-width="1" />
          <line id="直线_22" data-name="直线 22" y1="7" x2="5" transform="translate(24.084 608.5)" fill="none"
            stroke="#707070" stroke-width="1" />
          <line id="直线_23" data-name="直线 23" x2="5" y2="7" transform="translate(19.084 608.5)" fill="none"
            stroke="#707070" stroke-width="1" />
          <text id="Z" transform="translate(20 645.5)" fill="#707070" font-size="20" font-family="SegoeUI, Segoe UI">
            <tspan x="0" y="0">Z</tspan>
          </text>
        </svg>
      </div>
    </div>
    <div class="out">
      <el-input v-model="delay" placeholder="请输入延迟" />
      <el-table :data="result" style="width: 100%">
        <el-table-column type="index" label="#" width="50">
        </el-table-column>
        <el-table-column prop="row" label="行号" width="60">
        </el-table-column>
        <el-table-column prop="type" label="类型" width="180">
        </el-table-column>
        <el-table-column prop="str" label="串">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import * as data from '../module/data'
import { ElButton, ElDialog, ElMessageBox, ElMessage } from 'element-plus'

export default defineComponent({
  components: {
    ElButton, ElDialog
  },
  data() {
    return {
      input: `program p
var i : integer ;
     x : array[1..16] of integer ;
begin
  {1111111}
  y := 'aaaaa' ;
  i := 5 + 10 ;
  x[i] := 0 ;
end .`,
      result: [],
      addKeyword: '',
      keywords: [],
      visible: false,
      delay: 1000
    }
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    start() {
      this.result = []
      this.lexer(this.input)
    },
    switch(selector, color) {
      console.log(selector, color);
      let element = document.querySelector(`${selector}`)
      element.querySelectorAll('svg line').forEach(el => {
        el.setAttribute('stroke', color)
      })
      element.querySelectorAll('svg g').forEach(el => {
        el.setAttribute('stroke', color)
      })
      element.querySelectorAll('svg path').forEach(el => {
        el.setAttribute('stroke', color)
      })
      element.querySelectorAll('svg text').forEach(el => {
        el.setAttribute('fill', color)
      })
    },
    isNumber(n) {
      return n >= '0' && n <= '9'
    },
    isChar(c) {
      return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
    },
    async lexer(code) {
      let cur = 0
      let char = code[cur]
      let row = 1
      while (char !== undefined) {
        if (char === ' ' || char === '\t') {
          char = code[++cur]
        } else if (char == '\n') {
          char = code[++cur]
          row++
        } else if (this.isNumber(char)) {
          let str = char
          char = code[++cur]
          while (this.isNumber(char)) {
            str += char
            char = code[++cur]
          }
          this.switch('.intc', "#ff0000")
          this.result.push({
            row,
            type: '无符号整数',
            str,
          })
          await this.sleep(this.delay)
          this.switch('.intc', "#707070")
        } else if (this.isChar(char)) {
          let str = char
          char = code[++cur]
          while (this.isChar(char) || this.isNumber(char)) {
            str += char
            char = code[++cur]
          }
          let isKeyword = false
          this.keywords.forEach(item => {
            if (item.content === str) {
              isKeyword = true
            }
          })
          this.switch('.identKeyword .base', "#ff0000")
          this.switch(`.identKeyword .${isKeyword ? 'keyword' : 'identifier'}`, "#ff0000")
          this.result.push({
            row,
            type: isKeyword ? '关键字' : '标识符',
            str,
          })
          await this.sleep(this.delay)
          this.switch('.identKeyword', "#707070")
        } else if (char === ':') {
          let str = char
          char = code[++cur]
          let type
          let a
          if (char === '=') {
            str += char
            char = code[++cur]
            type = '双分界符'
            a = 'double'
          } else {
            type = '单分界符'
            a = 'single'
          }
          this.switch('.singleDouble .base', "#ff0000")
          this.switch(`.singleDouble .${a}`, "#ff0000")
          this.result.push({
            row,
            type,
            str,
          })
          await this.sleep(this.delay)
          this.switch('.singleDouble', "#707070")
        } else if (data.singleCharacterDelimiter.indexOf(char) >= 0) {
          this.switch('.asingle', "#ff0000")
          this.result.push({
            row,
            type: '单分界符',
            str: char,
          })
          await this.sleep(this.delay)
          this.switch('.asingle', "#707070")
          char = code[++cur]
        } else if (char === data.wordCategory[5].word) {
          let str = char
          char = code[++cur]
          do {
            str += char
            char = code[++cur]
          } while (code[cur - 1] !== data.wordCategory[6].word)
          this.switch('.notes', "#ff0000")
          this.result.push({
            row,
            type: '注释',
            str,
          })
          await this.sleep(this.delay)
          this.switch('.notes', "#707070")
        } else if (char === '.') {
          let str = char
          char = code[++cur]
          let type
          let b
          if (char === '.') {
            str += char
            char = code[++cur]
            type = '数组下标界限符'
            b = 'array'
          } else {
            type = '程序结束'
            b = 'end'
          }
          this.switch('.endArray .base', "#ff0000")
          this.switch(`.endArray .${b}`, "#ff0000")
          this.result.push({
            row,
            type,
            str,
          })
          await this.sleep(this.delay)
          this.switch('.endArray', "#707070")
        } else if (char === data.wordCategory[7].word) {
          let str = char
          char = code[++cur]
          do {
            str += char
            char = code[++cur]
          } while (code[cur - 1] !== data.wordCategory[7].word)
          this.switch('.string', "#ff0000")
          this.result.push({
            row,
            type: '字符串',
            str,
          })
          await this.sleep(this.delay)
          this.switch('.string', "#707070")
        } else {
          this.switch('.error', "#ff0000")
          this.result.push({
            row,
            type: 'error',
            str: char,
          })
          await this.sleep(this.delay)
          this.switch('.error', "#707070")
          char = code[++cur]
        }
      }
    },
    async postData(url = '', body = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      return response.json();
    },
    handleDelete(id) {
      ElMessageBox.confirm('确认删除？')
        .then(() => {
          this.postData('/api/delete', { id }).then(resp => {
            if (resp.stat === 'ok') {
              ElMessage.success('删除成功')
              this.updateKeyword()
            } else {
              ElMessage.error('发生错误')
            }
          })
        })
    },
    handleAddKeyword() {
      this.postData('/api/create', { content: this.addKeyword }).then(resp => {
        if (resp.stat === 'ok') {
          ElMessage.success('添加成功')
          this.updateKeyword()
        } else {
          ElMessage.error('发生错误')
        }
      })
    },
    updateKeyword() {
      this.postData('/api/list').then(resp => {
        this.keywords = resp.data
      })
    }
  },
  mounted() {
    this.updateKeyword()
  }
});
</script>

<style lang="less">
#lexer {
  padding: 30px;
  display: flex;
  height: 100%;
  box-sizing: border-box;
}

#dfa {
  display: flex;
  height: 100%;

  .start {
    margin-top: 22px;
  }

  .body>div {
    margin-left: -25px;
  }

  .body {
    .intc {
      margin-left: 0;
    }

    .identKeyword {
      margin-top: 5px;
      display: flex;

      .right {
        margin-top: -7px;

        .keyword {
          margin-top: -25px;
        }
      }
    }

    .singleDouble {
      margin-top: 13px;

      .single {
        margin-left: 127px;
        margin-bottom: -5px;
      }

      .baseDouble {
        display: flex;
      }
    }

    .notes {
      margin-top: 8px;
    }

    .endArray {
      margin-top: 7px;

      .end {
        margin-left: 127px;
        margin-bottom: -5px;
      }

      .baseArray {
        display: flex;
      }
    }

    .error {
      margin-top: 21px;
    }
  }

  .body>.single {
    margin-top: 30px;
  }

  .body.array {
    margin-top: 8px;
  }

  .last {
    margin-left: -24px;
    margin-top: 45px;
  }
}

#lexer>div {
  flex-basis: 30%;
}

.out {
  height: 100%;
  overflow: auto;
}
</style>
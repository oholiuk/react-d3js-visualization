import React from 'react';

function LeaderboardsTopWinners() {
  
  return (
    <article className="screen screen--sub">

		<h1 className="screen__heading">TOP PLAYERS BY PAID FINISHES</h1>

		<ul className="screen__desc">
			<li className="screen__desc__i">An eSports stalwart, Mew2King has logged an eye-watering 511 paid finishes across the Super Smash Brothers franchise throughout his 12-year career.</li>
		</ul>

		<div className="table-data table-data--8-col">

			<div className="table-filters">
				<select className="table-filter">
					<option value="">Country</option>
					<option value="Australia">Australia </option>
					<option value="Belarus">Belarus</option>
					<option value="Belgium">Belgium </option>
					<option value="Brazil">Brazil </option>
					<option value="Bulgaria">Bulgaria</option>
					<option value="Canada">Canada </option>
					<option value="Chile">Chile</option>
					<option value="China">China</option>
					<option value="Denmark">Denmark</option>
					<option value="Estonia">Estonia</option>
					<option value="Finland">Finland</option>
					<option value="France">France</option>
					<option value="Germany">Germany</option>
					<option value="Greece">Greece</option>
					<option value="Hong Kong">Hong Kong</option>
					<option value="Israel">Israel </option>
					<option value="Italy">Italy</option>
					<option value="Japan">Japan </option>
					<option value="Jordan">Jordan</option>
					<option value="Kazakhstan">Kazakhstan </option>
					<option value="Macao">Macao </option>
					<option value="Macedonia">Macedonia</option>
					<option value="Malaysia">Malaysia </option>
					<option value="Netherlands">Netherlands </option>
					<option value="Norway">Norway</option>
					<option value="Pakistan">Pakistan</option>
					<option value="Philippines">Philippines</option>
					<option value="Poland">Poland</option>
					<option value="Romania">Romania</option>
					<option value="Russia">Russia</option>
					<option value="Singapore">Singapore</option>
					<option value="Slovakia">Slovakia</option>
					<option value="South Korea">South Korea</option>
					<option value="Spain">Spain</option>
					<option value="Sweden">Sweden</option>
					<option value="Taiwan">Taiwan</option>
					<option value="Ukraine">Ukraine</option>
					<option value="United Kingdom">United Kingdom </option>
					<option value="United States">United States</option>
				</select>

				<select className="table-filter">
					<option value="">Top Game</option>
					<option value="Age of Empires II: The Age of Kings">Age of Empires II: The Age of Kings</option>
					<option value="Call of Duty: Advanced Warfare">Call of Duty: Advanced Warfare</option>
					<option value="Call of Duty: Black Ops 2">Call of Duty: Black Ops 2</option>
					<option value="Call of Duty: Black Ops III">Call of Duty: Black Ops III</option>
					<option value="Call of Duty: Ghosts">Call of Duty: Ghosts</option>
					<option value="Call of Duty: Modern Warfare 3">Call of Duty: Modern Warfare 3</option>
					<option value="Counter-Strike">Counter-Strike</option>
					<option value="Counter-Strike: Global Offensive">Counter-Strike: Global Offensive</option>
					<option value="Doom 3">Doom 3</option>
					<option value="Dota 2">Dota 2</option>
					<option value="FIFA 13">FIFA 13</option>
					<option value="Halo 2">Halo 2</option>
					<option value="Halo 3">Halo 3</option>
					<option value="Halo 4">Halo 4</option>
					<option value="Halo 5: Guardians">Halo 5: Guardians</option>
					<option value="Halo: Reach">Halo: Reach</option>
					<option value="Hearthstone: Heroes of WarCraft">Hearthstone: Heroes of WarCraft</option>
					<option value="Heroes of the Storm">Heroes of the Storm</option>
					<option value="League of Legends">League of Legends</option>
					<option value="Madden NFL 2013">Madden NFL 2013</option>
					<option value="Mortal Kombat X">Mortal Kombat X</option>
					<option value="Painkiller">Painkiller</option>
					<option value="Quake 4">Quake 4</option>
					<option value="Quake III Arena">Quake III Arena</option>
					<option value="Quake Live">Quake Live</option>
					<option value="Smite">Smite</option>
					<option value="StarCraft II">StarCraft II</option>
					<option value="StarCraft: Brood War">StarCraft: Brood War</option>
					<option value="Street Fighter V">Street Fighter V</option>
					<option value="Super Smash Bros. Melee">Super Smash Bros. Melee</option>
					<option value="Super Smash Bros. for Wii U">Super Smash Bros. for Wii U</option>
					<option value="Turbo Racing League">Turbo Racing League</option>
					<option value="Ultra Street Fighter IV">Ultra Street Fighter IV</option>
					<option value="WarCraft III">WarCraft III</option>
					<option value="World of WarCraft">World of WarCraft</option>
				</select>
			</div>

			<div className="table-wrap">
				<div className="table-inner">
					<div className="table__head">
						<div className="table__th">Rank</div>
						<div className="table__th table__th--reverse">Country</div>
						<div className="table__th">Player ID</div>
						<div className="table__th table__th--reverse">Player Name</div>
						<div className="table__th">Overall Winnings</div>
						<div className="table__th">Overall Results</div>
						<div className="table__th table__th--reverse">Top Game</div>
						<div className="table__th">Top Game Results</div>
					</div>
					<div className="table__body">
						<div className="table__row">
							<div className="table__td">1</div>
							<div className="table__td">United States</div>
							<div className="table__td">UNiVeRsE</div>
							<div className="table__td">Saahil Arora</div>
							<div className="table__td">$2,720,624</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$2,720,624</div>
						</div>
						<div className="table__row">
							<div className="table__td">2</div>
							<div className="table__td">United States</div>
							<div className="table__td">ppd</div>
							<div className="table__td">Peter Dager</div>
							<div className="table__td">$2,618,120</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$2,602,009</div>
						</div>
						<div className="table__row">
							<div className="table__td">3</div>
							<div className="table__td">Pakistan</div>
							<div className="table__td">SumaiL</div>
							<div className="table__td">Sumail Hassan</div>
							<div className="table__td">$2,401,426</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$2,401,426</div>
						</div>
						<div className="table__row">
							<div className="table__td">4</div>
							<div className="table__td">United States</div>
							<div className="table__td">Fear</div>
							<div className="table__td">Clinton Loomis</div>
							<div className="table__td">$2,383,156</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$2,381,800</div>
						</div>
						<div className="table__row">
							<div className="table__td">5</div>
							<div className="table__td">China</div>
							<div className="table__td">iceice</div>
							<div className="table__td">Li Peng</div>
							<div className="table__td">$1,981,327</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,981,327</div>
						</div>
						<div className="table__row">
							<div className="table__td">6</div>
							<div className="table__td">China</div>
							<div className="table__td">bLink</div>
							<div className="table__td">Zhou Yang</div>
							<div className="table__td">$1,937,778</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,937,778</div>
						</div>
						<div className="table__row">
							<div className="table__td">7</div>
							<div className="table__td">China</div>
							<div className="table__td">y`</div>
							<div className="table__td">Zhang Yiping</div>
							<div className="table__td">$1,937,778</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,937,778</div>
						</div>
						<div className="table__row">
							<div className="table__td">8</div>
							<div className="table__td">China</div>
							<div className="table__td">Faith_bian</div>
							<div className="table__td">Zhang Ruida</div>
							<div className="table__td">$1,937,717</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,937,717</div>
						</div>
						<div className="table__row">
							<div className="table__td">9</div>
							<div className="table__td">China</div>
							<div className="table__td">Shadow</div>
							<div className="table__td">Chu Zeyu</div>
							<div className="table__td">$1,937,617</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,937,617</div>
						</div>
						<div className="table__row">
							<div className="table__td">10</div>
							<div className="table__td">Canada </div>
							<div className="table__td">Aui_2000</div>
							<div className="table__td">Kurtis Ling</div>
							<div className="table__td">$1,930,129</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,930,129</div>
						</div>
						<div className="table__row">
							<div className="table__td">11</div>
							<div className="table__td">China</div>
							<div className="table__td">xiao8</div>
							<div className="table__td">Zhang, Ning</div>
							<div className="table__td">$1,824,535</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,817,094</div>
						</div>
						<div className="table__row">
							<div className="table__td">12</div>
							<div className="table__td">China</div>
							<div className="table__td">Hao</div>
							<div className="table__td">Chen, Zhihao</div>
							<div className="table__td">$1,759,847</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,753,406</div>
						</div>
						<div className="table__row">
							<div className="table__td">13</div>
							<div className="table__td">China</div>
							<div className="table__td">Mu</div>
							<div className="table__td">Zhang, Pan</div>
							<div className="table__td">$1,390,712</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,386,340</div>
						</div>
						<div className="table__row">
							<div className="table__td">14</div>
							<div className="table__td">Estonia</div>
							<div className="table__td">Puppey</div>
							<div className="table__td">Clement Ivanov</div>
							<div className="table__td">$1,348,176</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,347,106</div>
						</div>
						<div className="table__row">
							<div className="table__td">15</div>
							<div className="table__td">Denmark</div>
							<div className="table__td">MiSeRy</div>
							<div className="table__td">Rasmus Fillipsen</div>
							<div className="table__td">$1,335,957</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,335,187</div>
						</div>
						<div className="table__row">
							<div className="table__td">16</div>
							<div className="table__td">China</div>
							<div className="table__td">Banana</div>
							<div className="table__td">Jiao, Wang</div>
							<div className="table__td">$1,279,562</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,267,524</div>
						</div>
						<div className="table__row">
							<div className="table__td">17</div>
							<div className="table__td">China</div>
							<div className="table__td">SanSheng</div>
							<div className="table__td">Wang, Zhaohui</div>
							<div className="table__td">$1,207,649</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,198,814</div>
						</div>
						<div className="table__row">
							<div className="table__td">18</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">Zai</div>
							<div className="table__td">Ludwig Wåhlberg</div>
							<div className="table__td">$1,184,448</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,165,776</div>
						</div>
						<div className="table__row">
							<div className="table__td">19</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">s4</div>
							<div className="table__td">Gustav Magnusson</div>
							<div className="table__td">$1,165,146</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,164,087</div>
						</div>
						<div className="table__row">
							<div className="table__td">20</div>
							<div className="table__td">Romania</div>
							<div className="table__td">w33</div>
							<div className="table__td">Aliwi Omar</div>
							<div className="table__td">$1,160,779</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,160,779</div>
						</div>
						<div className="table__row">
							<div className="table__td">21</div>
							<div className="table__td">China</div>
							<div className="table__td">MMY!</div>
							<div className="table__td">Lei, Zengrong</div>
							<div className="table__td">$1,112,556</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,100,227</div>
						</div>
						<div className="table__row">
							<div className="table__td">22</div>
							<div className="table__td">China</div>
							<div className="table__td">Fenrir</div>
							<div className="table__td">Lu, Chao</div>
							<div className="table__td">$1,093,916</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,093,916</div>
						</div>
						<div className="table__row">
							<div className="table__td">23</div>
							<div className="table__td">Singapore</div>
							<div className="table__td">iceiceice</div>
							<div className="table__td">Koh, Daryl Pei Xiang</div>
							<div className="table__td">$1,091,901</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,089,501</div>
						</div>
						<div className="table__row">
							<div className="table__td">24</div>
							<div className="table__td">Denmark</div>
							<div className="table__td">N0tail</div>
							<div className="table__td">Johan Sundstein</div>
							<div className="table__td">$1,057,144</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,048,993</div>
						</div>
						<div className="table__row">
							<div className="table__td">25</div>
							<div className="table__td">Germany</div>
							<div className="table__td">KuroKy</div>
							<div className="table__td">Kuro Takhasomi</div>
							<div className="table__td">$1,044,121</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,043,398</div>
						</div>
						<div className="table__row">
							<div className="table__td">26</div>
							<div className="table__td">China</div>
							<div className="table__td">Sylar</div>
							<div className="table__td">Liu, Jiajun</div>
							<div className="table__td">$1,019,827</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$1,013,772</div>
						</div>
						<div className="table__row">
							<div className="table__td">27</div>
							<div className="table__td">China</div>
							<div className="table__td">Super</div>
							<div className="table__td">Xie, Junhao</div>
							<div className="table__td">$1,017,583</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$998,335</div>
						</div>
						<div className="table__row">
							<div className="table__td">28</div>
							<div className="table__td">China</div>
							<div className="table__td">fy</div>
							<div className="table__td">Xu, Linsen</div>
							<div className="table__td">$991,261</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$991,261</div>
						</div>
						<div className="table__row">
							<div className="table__td">29</div>
							<div className="table__td">Canada </div>
							<div className="table__td">Arteezy</div>
							<div className="table__td">Artour Babaev</div>
							<div className="table__td">$979,654</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$979,654</div>
						</div>
						<div className="table__row">
							<div className="table__td">30</div>
							<div className="table__td">Israel </div>
							<div className="table__td">Fly</div>
							<div className="table__td">Tal Aizik</div>
							<div className="table__td">$979,015</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$965,175</div>
						</div>
						<div className="table__row">
							<div className="table__td">31</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">Resolut1on</div>
							<div className="table__td">Roman Fominok</div>
							<div className="table__td">$959,434</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$959,434</div>
						</div>
						<div className="table__row">
							<div className="table__td">32</div>
							<div className="table__td">China</div>
							<div className="table__td">LaNm</div>
							<div className="table__td">Zhang, Zhicheng</div>
							<div className="table__td">$932,607</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$932,154</div>
						</div>
						<div className="table__row">
							<div className="table__td">33</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Faker</div>
							<div className="table__td">Lee, Sang Hyeok</div>
							<div className="table__td">$897,819</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$897,819</div>
						</div>
						<div className="table__row">
							<div className="table__td">34</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Bengi</div>
							<div className="table__td">Bae, Seong Ung</div>
							<div className="table__td">$810,683</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$810,683</div>
						</div>
						<div className="table__row">
							<div className="table__td">35</div>
							<div className="table__td">Macedonia</div>
							<div className="table__td">Saksa</div>
							<div className="table__td">Martin Sazdov</div>
							<div className="table__td">$802,807</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$802,807</div>
						</div>
						<div className="table__row">
							<div className="table__td">36</div>
							<div className="table__td">China</div>
							<div className="table__td">Agressif</div>
							<div className="table__td">Sun, Zheng</div>
							<div className="table__td">$795,993</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$795,993</div>
						</div>
						<div className="table__row">
							<div className="table__td">37</div>
							<div className="table__td">China</div>
							<div className="table__td">Yao</div>
							<div className="table__td">Yao, Zhengzheng</div>
							<div className="table__td">$793,712</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$787,633</div>
						</div>
						<div className="table__row">
							<div className="table__td">38</div>
							<div className="table__td">Canada </div>
							<div className="table__td">EternaLEnVy</div>
							<div className="table__td">Jacky Mao</div>
							<div className="table__td">$789,966</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$789,966</div>
						</div>
						<div className="table__row">
							<div className="table__td">39</div>
							<div className="table__td">Malaysia </div>
							<div className="table__td">Mushi</div>
							<div className="table__td">Chai, Yee Fung</div>
							<div className="table__td">$773,450</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$773,163</div>
						</div>
						<div className="table__row">
							<div className="table__td">40</div>
							<div className="table__td">China</div>
							<div className="table__td">Maybe</div>
							<div className="table__td">Lu Yao</div>
							<div className="table__td">$763,629</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$763,629</div>
						</div>
						<div className="table__row">
							<div className="table__td">41</div>
							<div className="table__td">Canada </div>
							<div className="table__td">MoonMeander</div>
							<div className="table__td">David Tan</div>
							<div className="table__td">$763,248</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$745,373</div>
						</div>
						<div className="table__row">
							<div className="table__td">42</div>
							<div className="table__td">China</div>
							<div className="table__td">rOtK</div>
							<div className="table__td">Bai, Fan</div>
							<div className="table__td">$758,012</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$738,609</div>
						</div>
						<div className="table__row">
							<div className="table__td">43</div>
							<div className="table__td">Malaysia </div>
							<div className="table__td">ChuaN</div>
							<div className="table__td">Wong, Hock Chuan</div>
							<div className="table__td">$739,183</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$712,250</div>
						</div>
						<div className="table__row">
							<div className="table__td">44</div>
							<div className="table__td">Denmark</div>
							<div className="table__td">Cr1t</div>
							<div className="table__td">Andreas Nielsen</div>
							<div className="table__td">$734,270</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$734,270</div>
						</div>
						<div className="table__row">
							<div className="table__td">45</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">Dendi</div>
							<div className="table__td">Danil Ishutin</div>
							<div className="table__td">$732,549</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$727,894</div>
						</div>
						<div className="table__row">
							<div className="table__td">46</div>
							<div className="table__td">United States</div>
							<div className="table__td">Moo</div>
							<div className="table__td">David Hull</div>
							<div className="table__td">$725,107</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$725,107</div>
						</div>
						<div className="table__row">
							<div className="table__td">47</div>
							<div className="table__td">China</div>
							<div className="table__td">garder</div>
							<div className="table__td">Liu, Xinzhou</div>
							<div className="table__td">$705,461</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$705,461</div>
						</div>
						<div className="table__row">
							<div className="table__td">48</div>
							<div className="table__td">China</div>
							<div className="table__td">Q</div>
							<div className="table__td">Fu, Bin</div>
							<div className="table__td">$705,360</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$705,360</div>
						</div>
						<div className="table__row">
							<div className="table__td">49</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">Loda</div>
							<div className="table__td">Jonathan Berg</div>
							<div className="table__td">$697,026</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$692,332</div>
						</div>
						<div className="table__row">
							<div className="table__td">50</div>
							<div className="table__td">China</div>
							<div className="table__td">Xz</div>
							<div className="table__td">Chen, Zezhi</div>
							<div className="table__td">$689,259</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$689,259</div>
						</div>
						<div className="table__row">
							<div className="table__td">51</div>
							<div className="table__td">Macao </div>
							<div className="table__td">DDC</div>
							<div className="table__td">Liang, Fa Ming</div>
							<div className="table__td">$677,795</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$669,668</div>
						</div>
						<div className="table__row">
							<div className="table__td">52</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">pieliedie</div>
							<div className="table__td">Johan Åström</div>
							<div className="table__td">$674,924</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$674,924</div>
						</div>
						<div className="table__row">
							<div className="table__td">53</div>
							<div className="table__td">China</div>
							<div className="table__td">Faith</div>
							<div className="table__td">Zeng, Hongda</div>
							<div className="table__td">$672,760</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$654,184</div>
						</div>
						<div className="table__row">
							<div className="table__td">54</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">EGM</div>
							<div className="table__td">Jerry Lundqvist</div>
							<div className="table__td">$669,534</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$669,534</div>
						</div>
						<div className="table__row">
							<div className="table__td">55</div>
							<div className="table__td">China</div>
							<div className="table__td">Shiki</div>
							<div className="table__td">Huang, Jiwei</div>
							<div className="table__td">$651,390</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$651,390</div>
						</div>
						<div className="table__row">
							<div className="table__td">56</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">XBOCT</div>
							<div className="table__td">Oleksandr Dashkevych</div>
							<div className="table__td">$651,175</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$650,239</div>
						</div>
						<div className="table__row">
							<div className="table__td">57</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">Akke</div>
							<div className="table__td">Joakim Akterhall</div>
							<div className="table__td">$643,460</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$638,611</div>
						</div>
						<div className="table__row">
							<div className="table__td">58</div>
							<div className="table__td">Jordan</div>
							<div className="table__td">Miracle</div>
							<div className="table__td">Amer Barqawi</div>
							<div className="table__td">$639,598</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$639,598</div>
						</div>
						<div className="table__row">
							<div className="table__td">59</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Wolf</div>
							<div className="table__td">Lee, Jae Wan</div>
							<div className="table__td">$635,741</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$635,741</div>
						</div>
						<div className="table__row">
							<div className="table__td">60</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Bang</div>
							<div className="table__td">Bae, Jun Sik</div>
							<div className="table__td">$631,240</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$631,240</div>
						</div>
						<div className="table__row">
							<div className="table__td">61</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">AdmiralBulldog</div>
							<div className="table__td">Henrik Ahnberg</div>
							<div className="table__td">$630,160</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$630,160</div>
						</div>
						<div className="table__row">
							<div className="table__td">62</div>
							<div className="table__td">Finland</div>
							<div className="table__td">JerAx</div>
							<div className="table__td">Jesse Vainikka</div>
							<div className="table__td">$619,898</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$619,898</div>
						</div>
						<div className="table__row">
							<div className="table__td">63</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Jaedong</div>
							<div className="table__td">Lee, Jae Dong</div>
							<div className="table__td">$619,477</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft: Brood War</div>
							<div className="table__td">$394,643</div>
						</div>
						<div className="table__row">
							<div className="table__td">64</div>
							<div className="table__td">China</div>
							<div className="table__td">Ferrari_430</div>
							<div className="table__td">Luo, Feichi</div>
							<div className="table__td">$578,799</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$554,796</div>
						</div>
						<div className="table__row">
							<div className="table__td">65</div>
							<div className="table__td">Germany</div>
							<div className="table__td">FATA</div>
							<div className="table__td">Adrian Trinks</div>
							<div className="table__td">$568,992</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$568,992</div>
						</div>
						<div className="table__row">
							<div className="table__td">66</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">QO</div>
							<div className="table__td">Kim, Sunyeob</div>
							<div className="table__td">$566,779</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$566,779</div>
						</div>
						<div className="table__row">
							<div className="table__td">67</div>
							<div className="table__td">China</div>
							<div className="table__td">BurNIng</div>
							<div className="table__td">Xu, Zhilei</div>
							<div className="table__td">$561,004</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$531,642</div>
						</div>
						<div className="table__row">
							<div className="table__td">68</div>
							<div className="table__td">Poland</div>
							<div className="table__td">neo</div>
							<div className="table__td">Filip Kubski</div>
							<div className="table__td">$560,570</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$421,098</div>
						</div>
						<div className="table__row">
							<div className="table__td">69</div>
							<div className="table__td">Poland</div>
							<div className="table__td">TaZ</div>
							<div className="table__td">Wiktor Wojtas</div>
							<div className="table__td">$556,810</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$419,298</div>
						</div>
						<div className="table__row">
							<div className="table__td">70</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Febby</div>
							<div className="table__td">Kim, Yong Min</div>
							<div className="table__td">$538,529</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$538,529</div>
						</div>
						<div className="table__row">
							<div className="table__td">71</div>
							<div className="table__td">Malaysia </div>
							<div className="table__td">Ohaiyo</div>
							<div className="table__td">Chong, Xin Khoo</div>
							<div className="table__td">$535,494</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$535,494</div>
						</div>
						<div className="table__row">
							<div className="table__td">72</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Flash</div>
							<div className="table__td">Lee, Young Ho</div>
							<div className="table__td">$525,638</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft: Brood War</div>
							<div className="table__td">$430,149</div>
						</div>
						<div className="table__row">
							<div className="table__td">73</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">MC</div>
							<div className="table__td">Jang, Min Chul</div>
							<div className="table__td">$506,726</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$506,645</div>
						</div>
						<div className="table__row">
							<div className="table__td">74</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">f0rest</div>
							<div className="table__td">Patrik Lindberg</div>
							<div className="table__td">$506,111</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$315,374</div>
						</div>
						<div className="table__row">
							<div className="table__td">75</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Moon</div>
							<div className="table__td">Jang, Jae Ho</div>
							<div className="table__td">$492,824</div>
							<div className="table__td">524</div>
							<div className="table__td">WarCraft III</div>
							<div className="table__td">$465,071</div>
						</div>
						<div className="table__row">
							<div className="table__td">76</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Life</div>
							<div className="table__td">Lee, Seung Hyun</div>
							<div className="table__td">$475,301</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$475,301</div>
						</div>
						<div className="table__row">
							<div className="table__td">77</div>
							<div className="table__td">Philippines</div>
							<div className="table__td">DJ</div>
							<div className="table__td">Djardel Jicko Mampusti</div>
							<div className="table__td">$474,122</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$474,122</div>
						</div>
						<div className="table__row">
							<div className="table__td">78</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">sOs</div>
							<div className="table__td">Kim, Yoo Jin</div>
							<div className="table__td">$469,832</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$469,382</div>
						</div>
						<div className="table__row">
							<div className="table__td">79</div>
							<div className="table__td">Poland</div>
							<div className="table__td">pasha</div>
							<div className="table__td">Jarosław Jarząbkowski</div>
							<div className="table__td">$458,945</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$414,595</div>
						</div>
						<div className="table__row">
							<div className="table__td">80</div>
							<div className="table__td">France</div>
							<div className="table__td">NBK</div>
							<div className="table__td">Nathan Schmitt</div>
							<div className="table__td">$457,680</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$436,054</div>
						</div>
						<div className="table__row">
							<div className="table__td">81</div>
							<div className="table__td">United States</div>
							<div className="table__td">Fatal1ty</div>
							<div className="table__td">Johnathan Wendel</div>
							<div className="table__td">$456,089</div>
							<div className="table__td">524</div>
							<div className="table__td">Painkiller</div>
							<div className="table__td">$240,550</div>
						</div>
						<div className="table__row">
							<div className="table__td">82</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Polt</div>
							<div className="table__td">Choi, Sung Hoon</div>
							<div className="table__td">$451,599</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$451,599</div>
						</div>
						<div className="table__row">
							<div className="table__td">83</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Duke</div>
							<div className="table__td">Lee, Ho Seong</div>
							<div className="table__td">$450,210</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$450,210</div>
						</div>
						<div className="table__row">
							<div className="table__td">84</div>
							<div className="table__td">Australia </div>
							<div className="table__td">kpii</div>
							<div className="table__td">Damien Chok</div>
							<div className="table__td">$450,075</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$450,075</div>
						</div>
						<div className="table__row">
							<div className="table__td">85</div>
							<div className="table__td">United States</div>
							<div className="table__td">JKap</div>
							<div className="table__td">Jordan Kaplan</div>
							<div className="table__td">$449,368</div>
							<div className="table__td">524</div>
							<div className="table__td">Call of Duty: Black Ops III</div>
							<div className="table__td">$231,333</div>
						</div>
						<div className="table__row">
							<div className="table__td">86</div>
							<div className="table__td">China</div>
							<div className="table__td">YYF</div>
							<div className="table__td">Jiang, Cen</div>
							<div className="table__td">$443,435</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$417,378</div>
						</div>
						<div className="table__row">
							<div className="table__td">87</div>
							<div className="table__td">China</div>
							<div className="table__td">KaKa</div>
							<div className="table__td">Zhi Hu</div>
							<div className="table__td">$426,768</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$426,768</div>
						</div>
						<div className="table__row">
							<div className="table__td">88</div>
							<div className="table__td">Brazil </div>
							<div className="table__td">FalleN</div>
							<div className="table__td">Gabriel Toledo</div>
							<div className="table__td">$425,085</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$417,508</div>
						</div>
						<div className="table__row">
							<div className="table__td">89</div>
							<div className="table__td">France</div>
							<div className="table__td">Happy</div>
							<div className="table__td">Vincent Schopenhauer</div>
							<div className="table__td">$423,231</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$418,515</div>
						</div>
						<div className="table__row">
							<div className="table__td">90</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Forev</div>
							<div className="table__td">Lee, Sang Don</div>
							<div className="table__td">$421,388</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$421,388</div>
						</div>
						<div className="table__row">
							<div className="table__td">91</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">GeT_RiGhT</div>
							<div className="table__td">Christopher Alesund</div>
							<div className="table__td">$420,938</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$319,057</div>
						</div>
						<div className="table__row">
							<div className="table__td">92</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Blank</div>
							<div className="table__td">Kang, Sun Gu</div>
							<div className="table__td">$419,261</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$419,261</div>
						</div>
						<div className="table__row">
							<div className="table__td">93</div>
							<div className="table__td">Brazil </div>
							<div className="table__td">fer</div>
							<div className="table__td">Fernando Alvarenga</div>
							<div className="table__td">$415,713</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$414,808</div>
						</div>
						<div className="table__row">
							<div className="table__td">94</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">MP</div>
							<div className="table__td">Pyo, Noah</div>
							<div className="table__td">$412,634</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$412,634</div>
						</div>
						<div className="table__row">
							<div className="table__td">95</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Lyn</div>
							<div className="table__td">Park, Joon</div>
							<div className="table__td">$411,033</div>
							<div className="table__td">524</div>
							<div className="table__td">WarCraft III</div>
							<div className="table__td">$378,079</div>
						</div>
						<div className="table__row">
							<div className="table__td">96</div>
							<div className="table__td">Malaysia </div>
							<div className="table__td">MidOne</div>
							<div className="table__td">Zheng Yeik Nai</div>
							<div className="table__td">$409,749</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$409,749</div>
						</div>
						<div className="table__row">
							<div className="table__td">97</div>
							<div className="table__td">Poland</div>
							<div className="table__td">byali</div>
							<div className="table__td">Paweł Bieliński</div>
							<div className="table__td">$409,072</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$409,072</div>
						</div>
						<div className="table__row">
							<div className="table__td">98</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Mvp</div>
							<div className="table__td">Jung, Jong Hyun</div>
							<div className="table__td">$408,892</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$404,265</div>
						</div>
						<div className="table__row">
							<div className="table__td">99</div>
							<div className="table__td">Brazil </div>
							<div className="table__td">coldzera</div>
							<div className="table__td">Marcelo David</div>
							<div className="table__td">$405,819</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$405,819</div>
						</div>
						<div className="table__row">
							<div className="table__td">100</div>
							<div className="table__td">Brazil </div>
							<div className="table__td">fnx</div>
							<div className="table__td">Lincoln Lau</div>
							<div className="table__td">$405,552</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$369,111</div>
						</div>
						<div className="table__row">
							<div className="table__td">101</div>
							<div className="table__td">Poland</div>
							<div className="table__td">snax</div>
							<div className="table__td">Janusz Pogorzelski</div>
							<div className="table__td">$405,412</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$405,412</div>
						</div>
						<div className="table__row">
							<div className="table__td">102</div>
							<div className="table__td">Finland</div>
							<div className="table__td">Matumbaman</div>
							<div className="table__td">Lasse Urpalainen</div>
							<div className="table__td">$404,309</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$404,309</div>
						</div>
						<div className="table__row">
							<div className="table__td">103</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">Funn1k</div>
							<div className="table__td">Gleb Lipatnikov</div>
							<div className="table__td">$400,420</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$400,420</div>
						</div>
						<div className="table__row">
							<div className="table__td">104</div>
							<div className="table__td">Bulgaria</div>
							<div className="table__td">MinD_ContRoL</div>
							<div className="table__td">Ivan Ivanov</div>
							<div className="table__td">$400,105</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$400,105</div>
						</div>
						<div className="table__row">
							<div className="table__td">105</div>
							<div className="table__td">Brazil </div>
							<div className="table__td">TACO</div>
							<div className="table__td">Epitacio Pessoa</div>
							<div className="table__td">$395,927</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$395,927</div>
						</div>
						<div className="table__row">
							<div className="table__td">106</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">MMA</div>
							<div className="table__td">Moon, Sung Won</div>
							<div className="table__td">$395,457</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$395,457</div>
						</div>
						<div className="table__row">
							<div className="table__td">107</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">PawN</div>
							<div className="table__td">Heo, Won Seok</div>
							<div className="table__td">$394,293</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$394,293</div>
						</div>
						<div className="table__row">
							<div className="table__td">108</div>
							<div className="table__td">Russia</div>
							<div className="table__td">GoD</div>
							<div className="table__td">Sergey Bragin</div>
							<div className="table__td">$393,936</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$389,223</div>
						</div>
						<div className="table__row">
							<div className="table__td">109</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">flusha</div>
							<div className="table__td">Robin Rönnquist</div>
							<div className="table__td">$393,402</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$393,402</div>
						</div>
						<div className="table__row">
							<div className="table__td">110</div>
							<div className="table__td">Denmark</div>
							<div className="table__td">Xyp9x</div>
							<div className="table__td">Andreas Højsleth</div>
							<div className="table__td">$392,848</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$391,239</div>
						</div>
						<div className="table__row">
							<div className="table__td">111</div>
							<div className="table__td">China</div>
							<div className="table__td">END</div>
							<div className="table__td">Yang Pu</div>
							<div className="table__td">$391,608</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$391,608</div>
						</div>
						<div className="table__row">
							<div className="table__td">112</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">Lil</div>
							<div className="table__td">Ilya Ilyuk</div>
							<div className="table__td">$390,987</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$390,987</div>
						</div>
						<div className="table__row">
							<div className="table__td">113</div>
							<div className="table__td">Denmark</div>
							<div className="table__td">dupreeh</div>
							<div className="table__td">Peter Rasmussen</div>
							<div className="table__td">$388,839</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$388,839</div>
						</div>
						<div className="table__row">
							<div className="table__td">114</div>
							<div className="table__td">Belarus</div>
							<div className="table__td">fng</div>
							<div className="table__td">Artem Barshack</div>
							<div className="table__td">$387,977</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$387,977</div>
						</div>
						<div className="table__row">
							<div className="table__td">115</div>
							<div className="table__td">Denmark</div>
							<div className="table__td">dev1ce</div>
							<div className="table__td">Nicolai Reedtz</div>
							<div className="table__td">$385,937</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$385,840</div>
						</div>
						<div className="table__row">
							<div className="table__td">116</div>
							<div className="table__td">Canada </div>
							<div className="table__td">Karma</div>
							<div className="table__td">Damon Barlow</div>
							<div className="table__td">$378,847</div>
							<div className="table__td">524</div>
							<div className="table__td">Call of Duty: Ghosts</div>
							<div className="table__td">$122,007</div>
						</div>
						<div className="table__row">
							<div className="table__td">117</div>
							<div className="table__td">France</div>
							<div className="table__td">apEX</div>
							<div className="table__td">Dan Madesclaire</div>
							<div className="table__td">$378,679</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$373,908</div>
						</div>
						<div className="table__row">
							<div className="table__td">118</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">JW</div>
							<div className="table__td">Jesper Wecksell</div>
							<div className="table__td">$376,742</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$376,742</div>
						</div>
						<div className="table__row">
							<div className="table__td">119</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Mata</div>
							<div className="table__td">Cho, Se Hyeong</div>
							<div className="table__td">$371,621</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$371,621</div>
						</div>
						<div className="table__row">
							<div className="table__td">120</div>
							<div className="table__td">France</div>
							<div className="table__td">kennyS</div>
							<div className="table__td">Kenny Schrub</div>
							<div className="table__td">$367,142</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$364,197</div>
						</div>
						<div className="table__row">
							<div className="table__td">121</div>
							<div className="table__td">United States</div>
							<div className="table__td">Crimsix</div>
							<div className="table__td">Ian Porter</div>
							<div className="table__td">$362,101</div>
							<div className="table__td">524</div>
							<div className="table__td">Call of Duty: Ghosts</div>
							<div className="table__td">$124,687</div>
						</div>
						<div className="table__row">
							<div className="table__td">122</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">olofmeister</div>
							<div className="table__td">Olof Kajbjer</div>
							<div className="table__td">$361,012</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$360,671</div>
						</div>
						<div className="table__row">
							<div className="table__td">123</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">KRiMZ</div>
							<div className="table__td">Freddy Johansson</div>
							<div className="table__td">$360,507</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$360,507</div>
						</div>
						<div className="table__row">
							<div className="table__td">124</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">DkPhobos</div>
							<div className="table__td">Alexander Kucheria</div>
							<div className="table__td">$359,679</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$358,354</div>
						</div>
						<div className="table__row">
							<div className="table__td">125</div>
							<div className="table__td">China</div>
							<div className="table__td">Cty</div>
							<div className="table__td">Chen, Tianyu</div>
							<div className="table__td">$359,375</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$359,375</div>
						</div>
						<div className="table__row">
							<div className="table__td">126</div>
							<div className="table__td">Malaysia </div>
							<div className="table__td">343</div>
							<div className="table__td">Adam Shah</div>
							<div className="table__td">$357,159</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$357,159</div>
						</div>
						<div className="table__row">
							<div className="table__td">127</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">PartinG</div>
							<div className="table__td">Won, Lee Sak</div>
							<div className="table__td">$355,604</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$355,604</div>
						</div>
						<div className="table__row">
							<div className="table__td">128</div>
							<div className="table__td">United States</div>
							<div className="table__td">Lethul</div>
							<div className="table__td">Tony Campbell</div>
							<div className="table__td">$355,000</div>
							<div className="table__td">524</div>
							<div className="table__td">Halo 5: Guardians</div>
							<div className="table__td">$294,850</div>
						</div>
						<div className="table__row">
							<div className="table__td">129</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">DuBu</div>
							<div className="table__td">Duyoung, Kim</div>
							<div className="table__td">$354,766</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$354,766</div>
						</div>
						<div className="table__row">
							<div className="table__td">130</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Byun</div>
							<div className="table__td">Byun, Hyun Woo</div>
							<div className="table__td">$354,504</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$354,504</div>
						</div>
						<div className="table__row">
							<div className="table__td">131</div>
							<div className="table__td">Russia</div>
							<div className="table__td">Illidan</div>
							<div className="table__td">Ilya Pevcaev</div>
							<div className="table__td">$351,902</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$349,199</div>
						</div>
						<div className="table__row">
							<div className="table__td">132</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">Xizt</div>
							<div className="table__td">Richard Landström</div>
							<div className="table__td">$350,804</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$316,112</div>
						</div>
						<div className="table__row">
							<div className="table__td">133</div>
							<div className="table__td">China</div>
							<div className="table__td">ClearLove</div>
							<div className="table__td">Ming, Kai</div>
							<div className="table__td">$347,768</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$347,768</div>
						</div>
						<div className="table__row">
							<div className="table__td">134</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">Edward</div>
							<div className="table__td">Ioann Sukharev</div>
							<div className="table__td">$347,539</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$251,717</div>
						</div>
						<div className="table__row">
							<div className="table__td">135</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">Looper</div>
							<div className="table__td">Jang, Hyeong Seok</div>
							<div className="table__td">$346,307</div>
							<div className="table__td">524</div>
							<div className="table__td">League of Legends</div>
							<div className="table__td">$346,307</div>
						</div>
						<div className="table__row">
							<div className="table__td">136</div>
							<div className="table__td">United States</div>
							<div className="table__td">SnakeBite</div>
							<div className="table__td">Paul Duarte</div>
							<div className="table__td">$345,125</div>
							<div className="table__td">524</div>
							<div className="table__td">Halo 5: Guardians</div>
							<div className="table__td">$292,250</div>
						</div>
						<div className="table__row">
							<div className="table__td">137</div>
							<div className="table__td">China</div>
							<div className="table__td">oldchicken</div>
							<div className="table__td">Zhiyong, Wang</div>
							<div className="table__td">$341,917</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$341,917</div>
						</div>
						<div className="table__row">
							<div className="table__td">138</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">sAviOr</div>
							<div className="table__td">Ma, Jae Yoon</div>
							<div className="table__td">$338,901</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft: Brood War</div>
							<div className="table__td">$338,901</div>
						</div>
						<div className="table__row">
							<div className="table__td">139</div>
							<div className="table__td">Netherlands </div>
							<div className="table__td">Grubby</div>
							<div className="table__td">Manuel Schenkhuizen</div>
							<div className="table__td">$338,899</div>
							<div className="table__td">524</div>
							<div className="table__td">WarCraft III</div>
							<div className="table__td">$279,348</div>
						</div>
						<div className="table__row">
							<div className="table__td">140</div>
							<div className="table__td">Canada </div>
							<div className="table__td">Royal 2</div>
							<div className="table__td">Mathew Fiorante</div>
							<div className="table__td">$337,588</div>
							<div className="table__td">524</div>
							<div className="table__td">Halo 5: Guardians</div>
							<div className="table__td">$292,250</div>
						</div>
						<div className="table__row">
							<div className="table__td">141</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">INnoVation</div>
							<div className="table__td">Lee, Shin Hyung</div>
							<div className="table__td">$335,835</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$332,337</div>
						</div>
						<div className="table__row">
							<div className="table__td">142</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">ArtStyle</div>
							<div className="table__td">Ivan Antonov</div>
							<div className="table__td">$329,090</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$326,229</div>
						</div>
						<div className="table__row">
							<div className="table__td">143</div>
							<div className="table__td">China</div>
							<div className="table__td">eLeVeN</div>
							<div className="table__td">Ren Yangwei</div>
							<div className="table__td">$327,644</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$327,644</div>
						</div>
						<div className="table__row">
							<div className="table__td">144</div>
							<div className="table__td">Romania</div>
							<div className="table__td">bOne7</div>
							<div className="table__td">Pittner Armand</div>
							<div className="table__td">$324,133</div>
							<div className="table__td">524</div>
							<div className="table__td">Dota 2</div>
							<div className="table__td">$324,133</div>
						</div>
						<div className="table__row">
							<div className="table__td">145</div>
							<div className="table__td">Ukraine</div>
							<div className="table__td">Zeus</div>
							<div className="table__td">Daniil Teslenko</div>
							<div className="table__td">$317,928</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$224,607</div>
						</div>
						<div className="table__row">
							<div className="table__td">146</div>
							<div className="table__td">South Korea</div>
							<div className="table__td">TY</div>
							<div className="table__td">Jun, Tae Yang</div>
							<div className="table__td">$317,420</div>
							<div className="table__td">524</div>
							<div className="table__td">StarCraft II</div>
							<div className="table__td">$309,345</div>
						</div>
						<div className="table__row">
							<div className="table__td">147</div>
							<div className="table__td">Sweden</div>
							<div className="table__td">friberg</div>
							<div className="table__td">Adam Friberg</div>
							<div className="table__td">$316,207</div>
							<div className="table__td">524</div>
							<div className="table__td">Counter-Strike: Global Offensive</div>
							<div className="table__td">$315,979</div>
						</div>
						<div className="table__row">
							<div className="table__td">148</div>
							<div className="table__td">United States</div>
							<div className="table__td">BaRRaCCuDDa</div>
							<div className="table__td">John Salter</div>
							<div className="table__td">$314,007</div>
							<div className="table__td">524</div>
							<div className="table__td">Smite</div>
							<div className="table__td">$314,007</div>
						</div>
						<div className="table__row">
							<div className="table__td">149</div>
							<div className="table__td">United States</div>
							<div className="table__td">Andinster</div>
							<div className="table__td">Andrew Woodward</div>
							<div className="table__td">$313,007</div>
							<div className="table__td">524</div>
							<div className="table__td">Smite</div>
							<div className="table__td">$313,007</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>

	</article>
  );
}

export default LeaderboardsTopWinners;

var province_arr = new Array("Jakarta", "Lampung", "Jawa Timur", "Jawa Barat");

// States
var s_a = new Array();
s_a[0]="";
s_a[1]="Kebon Jeruk|Kebayoran Lama|Cempaka Putih|Tebet|Jatinegara";
s_a[2]="Metro|Kalianda|Karang City|Sukaraja|Kaliawi";
s_a[3]="Bayuwangi|Blitar|Kediri|Malang|Surabaya";
s_a[4]="Lembang|Cikampek|Cigending|Bandung|Bogor";


function populateCities( provinceElementId, cityElementId ){
	
	var selectedProvinceIndex = document.getElementById( provinceElementId ).selectedIndex;

	var cityElement = document.getElementById( cityElementId );
	
	cityElement.length=0;	// Fixed by Julian Woods
	cityElement.options[0] = new Option('Select City','');
	cityElement.selectedIndex = 0;
	
	var city_arr = s_a[selectedProvinceIndex].split("|");
	
	for (var i=0; i<city_arr.length; i++) {
		cityElement.options[cityElement.length] = new Option(city_arr[i],city_arr[i]);
	}
}

function populateProvinces(provinceElementId, cityElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var provinceElement = document.getElementById(provinceElementId);
	provinceElement.length=0;
	provinceElement.options[0] = new Option('Select Country','-1');
	provinceElement.selectedIndex = 0;
	for (var i=0; i<province_arr.length; i++) {
		provinceElement.options[provinceElement.length] = new Option(province_arr[i],province_arr[i]);
	}

	// Assigned all countries. Now assign event listener for the states.

	if( cityElementId ){
		provinceElement.onchange = function(){
			populateCities( provinceElementId, cityElementId );
		};
	}
}

function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
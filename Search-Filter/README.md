## me

''' (data
.filter((item) => {
return search.toLowerCase() === ""
? item
: item.Country.toLowerCase().includes(search);
}))

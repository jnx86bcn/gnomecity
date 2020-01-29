import React, { useRef, useEffect, useState } from 'react';
import { getAllGnomes_DEV } from '../../services';
import { Gnome } from '../../models';
import { useSelector, useDispatch } from 'react-redux';
import { actions_setGnomes,actions_setLoading,actions_setShowFilters } from '../../redux/actions/actions';


export function SearchBar(): JSX.Element {

  const inputValues = useRef(null);

  const dispatch = useDispatch();

  const showFilter = useSelector( (state:any) => state.global.showFilter );

  useEffect(() => {
    // autocomplete(inputValues.current, countries);
    getGnomes();
  },[])


  // function autocomplete(inp: any, arr: any) {
  //   /*the autocomplete function takes two arguments,
  //   the text field element and an array of possible autocompleted values:*/
  //   let currentFocus: any;
  //   /*execute a function when someone writes in the text field:*/
  //   inp.addEventListener("input", function (e: any) {
  //     let a, b, i, val = this.value;
  //     /*close any already open lists of autocompleted values*/
  //     closeAllLists();
  //     if (!val) { return false; }
  //     currentFocus = -1;
  //     /*create a DIV element that will contain the items (values):*/
  //     a = document.createElement("DIV");
  //     a.setAttribute("id", this.id + "autocomplete-list");
  //     a.setAttribute("class", "autocomplete-items");
  //     /*append the DIV element as a child of the autocomplete container:*/
  //     this.parentNode.appendChild(a);
  //     /*for each item in the array...*/
  //     for (i = 0; i < arr.length; i++) {
  //       /*check if the item starts with the same letters as the text field value:*/
  //       if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
  //         /*create a DIV element for each matching element:*/
  //         b = document.createElement("DIV");
  //         /*make the matching letters bold:*/
  //         b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
  //         b.innerHTML += arr[i].substr(val.length);
  //         /*insert a input field that will hold the current array item's value:*/
  //         b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
  //         /*execute a function when someone clicks on the item value (DIV element):*/
  //         b.addEventListener("click", function (e) {
  //           /*insert the value for the autocomplete text field:*/
  //           inp.value = this.getElementsByTagName("input")[0].value;
  //           getCity(e.target);
  //           /*close the list of autocompleted values,
  //           (or any other open lists of autocompleted values:*/
  //           closeAllLists();
  //         });
  //         a.appendChild(b);
  //       }
  //     }
  //   });
  //   /*execute a function presses a key on the keyboard:*/
  //   inp.addEventListener("keydown", function (e: any) {
  //     let x: any = document.getElementById(this.id + "autocomplete-list");
  //     if (x) x = x.getElementsByTagName("div");
  //     if (e.keyCode == 40) {
  //       /*If the arrow DOWN key is pressed,
  //       increase the currentFocus variable:*/
  //       currentFocus++;
  //       /*and and make the current item more visible:*/
  //       addActive(x);
  //     } else if (e.keyCode == 38) { //up
  //       /*If the arrow UP key is pressed,
  //       decrease the currentFocus variable:*/
  //       currentFocus--;
  //       /*and and make the current item more visible:*/
  //       addActive(x);
  //     } else if (e.keyCode == 13) {
  //       /*If the ENTER key is pressed, prevent the form from being submitted,*/
  //       e.preventDefault();
  //       if (currentFocus > -1) {
  //         /*and simulate a click on the "active" item:*/
  //         if (x) x[currentFocus].click();
  //       }
  //     }
  //   });
  //   function addActive(x: any) {
  //     /*a function to classify an item as "active":*/
  //     if (!x) return false;
  //     /*start by removing the "active" class on all items:*/
  //     removeActive(x);
  //     if (currentFocus >= x.length) currentFocus = 0;
  //     if (currentFocus < 0) currentFocus = (x.length - 1);
  //     /*add class "autocomplete-active":*/
  //     x[currentFocus].classList.add("autocomplete-active");
  //   }
  //   function removeActive(x: any) {
  //     /*a function to remove the "active" class from all autocomplete items:*/
  //     for (let i = 0; i < x.length; i++) {
  //       x[i].classList.remove("autocomplete-active");
  //     }
  //   }
  //   function closeAllLists(elmnt?: any) {
  //     /*close all autocomplete lists in the document,
  //     except the one passed as an argument:*/
  //     let x = document.getElementsByClassName("autocomplete-items");
  //     for (let i = 0; i < x.length; i++) {
  //       if (elmnt != x[i] && elmnt != inp) {
  //         x[i].parentNode.removeChild(x[i]);
  //       }
  //     }
  //   }
  //   /*execute a function when someone clicks in the document:*/
  //   document.addEventListener("click", function (e) {
  //     closeAllLists(e.target);
  //   });
  // }


  function getGnomes() {
    dispatch(actions_setGnomes([]))
    dispatch(actions_setLoading(true));
    getAllGnomes_DEV().then((gnomes: Gnome[]) => {
      dispatch(actions_setGnomes(gnomes));
      dispatch(actions_setLoading(false));
    })
  }


  function updateShowFilter() {
    showFilter == false ? dispatch(actions_setShowFilters(true)) : dispatch(actions_setShowFilters(false))
  }


  return (
    <>
      <div className="searchbar">
        <div className="searchnavbar">
          {/* <div className="autocomplete">
            <input type="text" ref={inputValues} onChange={(e)=> updateValue(e) } placeholder="Ciudad" value = { __city } />
          </div> */}
          <button data-testid={"ButtonSearch"} onClick={() => getGnomes()}>Buscar</button>
        </div>
        <button className="margin-left10" data-testid={"ButtonFilter"} onClick={()=>{updateShowFilter()}}>Filtros</button>
      </div>
    </>
  )

}
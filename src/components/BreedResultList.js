import React, { useState, useEffect } from "react";

function BreedResultList( props ){
    const [ dogImages, setDogImages ] = useState( [] );
    console.log( `[BreedResultList] updating breed pictures: ${props.showBreed}`);

    useEffect( function(){
        console.log(`[BreedResultList] USE-EFFECT CALLED`);
        //fetch from API 
        loadBreedImages( props.showBreed );
    }, [props.showBreed] );

    async function loadBreedImages( breed ){
        if( props.showBreed.length>2){
            console.log('...calling api for images');
            //fetch from API
            const apiResult = await fetch( `https://dog.ceo/api/breed/${props.showBreed}/images`).then( result=>result.json() );
            setDogImages( apiResult.message );
        } else{ 
            console.log( ` load breed images called but no breed value`);
        }
    }

    return (
        <div class="container">
            <div class="row">

                {dogImages.map( dogImage=>
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src={dogImage} alt="" />
                        <div class="card-body">
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            )}

            </div>
        </div>        
    )
}

export default BreedResultList;
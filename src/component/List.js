import React from 'react'

export default function List(props) {
    return (
        <>
            <div className="container">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Item</th>
                            <th scope="col">Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{props.newitem}</td>
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

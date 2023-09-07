import { Container, AdmOrderCard, UserOrderCard } from "./style";
import { DropDown } from "../../components/DropDown";
import { Header } from "../../components/Header";

import {  useEffect, useState } from 'react';
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import moment from "moment/moment";
import { IoEllipse } from "react-icons/io5";
import { Footer } from "../../components/Footer";

export function OrderHistory() {
    const [status, setStatus] = useState("");
    const [sales, setSales] = useState([]);
    const navigate = useNavigate();

    const { user } = useAuth();

    function verifyStatus(status) {
        if (status == "Pendente") {
            return (
                <span> <IoEllipse className="red"/> Pendente</span>
            );
        } else if (status == "Preparando") {
            return (
                <span> <IoEllipse className="yellow"/> Preparando</span>
            );
        } else if (status == "Entregue") {
            return (
                <span> <IoEllipse className="green"/> Entregue</span>
            );
        };
    };

    useEffect(() => {
        async function loadSales() {
            const result = {};
            const { data } = await api.get("/sale");
            
            data.forEach(item => {
                const { id, name, quantity, created_at, status } = item;

                let date = moment(new Date ((created_at + "z"))).format("MM/YYYY HH:mm");
                date = date.replace(/:/g, 'h');

                const orderNumber = id.toString().padStart(5, "0");
                
                if (!result[id]) {
                    result[id] = { id, dishes: [], date, orderNumber, status };
                };
                
                result[id].dishes.push(`${quantity} x ${name} `);

                let finalResult = Object.values(result);

                finalResult = finalResult.sort((a, b) => b.id - a.id);

                setSales(finalResult);
            });
        };
        loadSales();
    }, [])
    return (
        <Container>
            <Header />

            <main>
                <ButtonText
                    className="button-text"
                    title="< Voltar"
                    onClick={() => navigate(-1)}
                />

                <h1>Pedidos</h1>

                <div className="card">

                    { Boolean(user.adm) &&

                        sales.map((sale, index) => (
                            <AdmOrderCard key={index}>
                                <h4> <span>{sale.orderNumber}</span> <span>{sale.date}</span></h4>
                                <p>{sale.dishes}</p>

                                <DropDown
                                    sale={sale.id}
                                    currentCategory={sale.status}
                                    setStatus={setStatus}
                                    useCategories={[{color: "red", title: "Pendente"}, {color: "yellow", title: "Preparando"}, {color: "green", title: "Entregue"}]}
                                />
                            </AdmOrderCard>
                        ))
                    }

                    { Boolean(!user.adm) &&
                        
                            
                        sales.map((sale, index) => (
                            <UserOrderCard key={index} >
                                <h4> <span>{sale.orderNumber}</span> {verifyStatus(sale.status)} <span>{sale.date}</span></h4>
                                
                                <p>{sale.dishes}</p>
                            </UserOrderCard>
                        ))
                    }
                </div>
            </main>

            <Footer />

        </Container>
    )
}
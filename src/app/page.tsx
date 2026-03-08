"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
const universes = [
    {id: "everlasting-summer", name: "Бесконечное Лето", image: "/es_ru.webp", description: "«Бесконечное лето» — визуальный роман о Семёне, оказавшемся в пионерском лагере 1980-х. Игрок делает выборы, влияющие на сюжет и одну из 13 концовок, а путешествие во времени и отношения с персонажами определяют его судьбу."},
    {id: "everlasting-summer-2", name: "Бесконечное Лето 2", image: "/es2_ru.webp", description: "Бесконечное Лето 2 - продолжение легендарной визуальной новеллы «Бесконечное Лето» уже скоро! А вики уже доступно!"},
    {id: "love-money-rocknroll", name: "Любовь, Деньги, Рок-н-Ролл", image: "/lmr_ru.webp", description: "«Любовь, Деньги, Рок-н-Ролл»: романтика 80-х, тайны и интриги, предательство и самопожертвование, ненависть и страсть – всё это новая игра от создателей легендарной новеллы «Бесконечное Лето»!"},
    {id: "minecraft", name: "Minecraft", image: "/minecraft.webp", description: "Исследуйте бесконечные миры, и стройте что угодно: от простейших домов до грандиозных замков и дворцов. Играйте в творческом режиме с неограническими ресурсами или вгрызайтесь в недра мира в режиме выживания, изготавливая оруэие и доспехи для защиты от опасных мобов."},
    {id: "one-piece", name: "One Piece", image: "/one-piece.webp", description: "Пираты Гранд-Лайна давно ищут легендарное сокровище Короля Пиратов Роджера, но для многих оно стало лишь мифом. Однако Монки Д. Луффи мечтает найти клад и стать новым Королём Пиратов, ценя друзей выше собственной мечты."},
    {id: "schedule-I", name: "Schedule-I", image: "/schedule-I.webp", description: "От мелкого наркоторговца до крупного наркобарона — производите и распространяйте различные наркотики по всему грязному городу Хайленд-Пойнт. Расширяйте свою империю с помощью недвижимости, бизнеса, сотрудников и многого другого."},
];
export default function WikiVerseHome() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="relative py-24 px-6 text-center border-b bg-gradient-to-b from-background to-muted/20">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary">WikiVerse</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">Вселенная игровых миров. Персонажи, локации, сюжетные ветки и скрытые детали — всё в одном месте.</p>
                    </div>
                </section>
                <section className="container mx-auto py-16 px-6">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold tracking-tight">Игровые вселенные</h2>
                        <p className="text-muted-foreground mt-2">Выбери мир, который хочешь исследовать</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {universes.map((u) => (
                            <Link key={u.id} href={`/${u.id}`}>
                                <Card className="group p-6 h-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-primary">
                                    <div className="aspect-[16/9] overflow-hidden">
                                        <img src={u.image} alt="No image" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{u.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3">{u.description}</p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

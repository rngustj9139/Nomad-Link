package NomadLink.WebService.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@Table(name = "TECHSTACKS")
public class TechStack {

    @Id
    @GeneratedValue
    @Column(name = "techstack_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY) // OneToOne, ManyToOne은 디폴트가 즉시로딩(EAGER)이기 때문에 지연로딩(LAZY)로 바꾸어준다.
    @JoinColumn(name = "member_id")
    private Member member;

    private String techName;

}

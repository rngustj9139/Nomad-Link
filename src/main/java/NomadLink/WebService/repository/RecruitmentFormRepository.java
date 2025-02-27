package NomadLink.WebService.repository;

import NomadLink.WebService.domain.RecruitmentForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class RecruitmentFormRepository {

    private final EntityManager em;

    public void save(RecruitmentForm recruitmentForm) {
        em.persist(recruitmentForm);
    }

}
